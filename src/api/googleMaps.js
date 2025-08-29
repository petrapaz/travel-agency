// src/api/googleMaps.js

const a_consumption = 8;
const v_consumption = 11;
const m_consumption = 15;
const fuelPrice = 2; //cca 2eur za litru zbog troskova
const driverRate = 20;
const a_tollRate = 0.07;
const v_m_tollRate = 0.11;
const a_basePrice = 29;
const v_basePrice = 46;
const m_basePrice = 65;

export async function calculateTransferPrices(origin, destination) {
  // Dohvaćamo API ključ iz .env datoteke
  const apiKey = import.meta.env.VITE_Maps_API_KEY;
  
  // Kreiramo URL za upit Google Directions API-ju
  const url = `/maps-api/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    // Šaljemo stvarni upit na Google Maps
    const response = await fetch(url);
    const data = await response.json();

    // Ako Google vrati grešku, prikaži je i vrati null
    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch directions from Google Maps API.');
    }

    const route = data.routes[0];
    const leg = route.legs[0];

    // Izvlačimo stvarne podatke o udaljenosti i trajanju
    const distanceKm = leg.distance.value / 1000; // Udaljenost u km
    const durationMinutes = leg.duration.value / 60; // Trajanje u minutama

    // za sada pretpostavka da je 80% dugih ruta autocesta.
    const tollDistanceKm = distanceKm > 100 ? distanceKm * 0.8 : 0;

    // Funkcija za izračun cijene po vozilu (ista kao i prije)
    const getPrice = (consumption, basePrice, tollRate) => {
      // Računamo troškove za dva smjera (povratno putovanje)
      const roundTripDistance = distanceKm * 2;
      const roundTripDurationHours = (durationMinutes * 2) / 60;
      
      const fuelCost = (roundTripDistance / 100) * consumption * fuelPrice;
      const driverCost = roundTripDurationHours * driverRate;
      const tollCost = tollDistanceKm * 2 * tollRate;

      const finalPrice = fuelCost + driverCost + tollCost + basePrice;
      
      // Zaokružujemo na najbližih 5 ili 10 eura za ljepšu cijenu
      return Math.round(finalPrice / 5) * 5;
    };
    
    // Vraćamo izračunate cijene
    return {
      carPrice: getPrice(a_consumption, a_basePrice, a_tollRate),
      vanPrice: getPrice(v_consumption, v_basePrice, v_m_tollRate),
      minibusPrice: getPrice(m_consumption, m_basePrice, v_m_tollRate),
    };

  } catch (error) {
    console.error("Google Maps API error:", error);
    // Vraćamo null u slučaju greške da aplikacija ne pukne
    return null;
  }
}