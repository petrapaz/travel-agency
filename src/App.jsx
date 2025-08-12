// src/App.jsx
import React, { useState, lazy, Suspense } from 'react'; // 1. Dodajemo lazy i Suspense
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//Import zajedničkih komponenti
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import BookingModal from './components/BookingModal';

//Lijeno učitavanje (lazy loading) svih stranica
const Home = lazy(() => import('./pages/Home'));
const DayTours = lazy(() => import('./pages/DayTours'));
const DayToursList = lazy(() => import('./pages/DayToursList'));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'));
const TransfersPage = lazy(() => import('./pages/TransfersPage'));
const TransfersResultsPage = lazy(() => import('./pages/TransfersResultsPage'));
const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const BookingSuccessPage = lazy(() => import('./pages/BookingSuccessPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

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

// Fallback komponenta dok se stranica učitava
function LoadingFallback() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <p className="text-xl text-gray-500">Loading page...</p>
    </div>
  )
}

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="font-sans bg-gray-100">
        {/*Sve rute omotane sa 'Suspense' komponentom */}
        <Suspense fallback={<LoadingFallback />}>
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
              <Route path="blog/:postId" element={<BlogPostPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;