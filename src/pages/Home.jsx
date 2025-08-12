// src/pages/Home.jsx
import React, { lazy, Suspense } from 'react'; // 1. Dodajemo lazy i Suspense
import Hero from '../components/Hero'; // Hero učitavamo odmah jer je vidljiv

//Ostale komponente uvoze se s 'lazy'
const Destinations = lazy(() => import('../components/Destinations'));
const SpecialOffer = lazy(() => import('../components/SpecialOffer'));
const Blog = lazy(() => import('../components/Blog'));
const Experiences = lazy(() => import('../components/Experiences'));

//Fallback komponenta dok se ostale učitavaju
function ComponentFallback() {
  // Prikazuje prazan prostor visine ekrana dok se komponenta ne učita
  return <div style={{ height: '100vh' }} />;
}

export default function Home() {
  return (
    <>
      <Hero />
      {/*Svaku 'lazy' komponentu omotamo sa Suspense */}
      <Suspense fallback={<ComponentFallback />}>
        <Destinations />
      </Suspense>
      <Suspense fallback={<ComponentFallback />}>
        <SpecialOffer />
      </Suspense>
      <Suspense fallback={<ComponentFallback />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<ComponentFallback />}>
        <Experiences />
      </Suspense>
    </>
  );
}