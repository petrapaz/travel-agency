// netlify/functions/calculatePrice.js

const a_consumption = 8;
const v_consumption = 11;
const m_consumption = 15;
const fuelPrice = 1.5;
const driverRate = 12;
const a_tollRate = 0.07;
const v_m_tollRate = 0.11;
const a_basePrice = 29;
const v_basePrice = 46;
const m_basePrice = 65;

exports.handler = async function(event) {
  const { origin, destination } = event.queryStringParameters;
  const apiKey = process.env.VITE_Maps_API_KEY; // Funkcija sigurno pristupa ključu

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Google Maps API Error');
    }

    const leg = data.routes[0].legs[0];
    const distanceKm = leg.distance.value / 1000;
    const durationMinutes = leg.duration.value / 60;
    const tollDistanceKm = distanceKm > 100 ? distanceKm * 0.8 : 0;

    const getPrice = (consumption, basePrice, tollRate) => {
      const roundTripDistance = distanceKm * 2;
      const roundTripDurationHours = (durationMinutes * 2) / 60;
      const fuelCost = (roundTripDistance / 100) * consumption * fuelPrice;
      const driverCost = roundTripDurationHours * driverRate;
      const tollCost = tollDistanceKm * 2 * tollRate;
      const finalPrice = fuelCost + driverCost + tollCost + basePrice;
      return Math.round(finalPrice / 5) * 5;
    };

    const prices = {
      carPrice: getPrice(a_consumption, a_basePrice, a_tollRate),
      vanPrice: getPrice(v_consumption, v_basePrice, v_m_tollRate),
      minibusPrice: getPrice(m_consumption, m_basePrice, v_m_tollRate),
    };

    return {
      statusCode: 200,
      body: JSON.stringify(prices),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};