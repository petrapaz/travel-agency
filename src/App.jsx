// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Import zajedničkih komponenti
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

// Import stranica
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import DayToursList from './pages/DayToursList';
import TourDetailPage from './pages/TourDetailPage';
import TransfersPage from './pages/TransfersPage';

// Layout komponenta koja sadrži zajedničke elemente
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-100">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="day-tours" element={<DayTours />} />
            <Route path="day-tours/offers" element={<DayToursList />} />
            <Route path="day-tours/tour/:tourId" element={<TourDetailPage />} />
            <Route path="transfers" element={<TransfersPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;