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
import TransfersResultsPage from './pages/TransfersResultsPage';
import ReservationPage from './pages/ReservationPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

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
            <Route path="transfers/results" element={<TransfersResultsPage />} />
            <Route path="transfers/reserve" element={<ReservationPage />} />
            <Route path="booking-success" element={<BookingSuccessPage />} /> 
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="contact-us" element={<ContactUsPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;