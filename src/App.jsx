// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Import zajedničkih komponenti
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import BookingModal from './components/BookingModal';

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
import BlogPostPage from './pages/BlogPostPage'; // Provjerite je li ovaj import tu

// Layout komponenta
function Layout({ onBookNowClick }) {
  return (
    <>
      <Navbar onBookNowClick={onBookNowClick} />
      <main>
        <Outlet />
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-100">
        <Routes>
          <Route path="/" element={<Layout onBookNowClick={() => setIsBookingModalOpen(true)} />}>
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

            {/* === OVA RUTA JE KLJUČNA ZA ISPRAVAK === */}
            <Route path="blog/:postId" element={<BlogPostPage />} />

          </Route>
        </Routes>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
