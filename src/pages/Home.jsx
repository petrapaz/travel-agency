// src/pages/Home.jsx
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import SpecialOffer from '../components/SpecialOffer';
import Blog from '../components/Blog';
import Experiences from '../components/Experiences';

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <SpecialOffer />
      <Blog />
      <Experiences />
    </>
  );
}