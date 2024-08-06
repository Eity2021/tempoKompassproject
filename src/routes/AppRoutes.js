import React, { lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Appointment = lazy(() => import("../pages/solutions/appointment"));
const Lobby = lazy(() => import("../pages/solutions/lobby"));
const Payroll = lazy(() => import("../pages/solutions/payroll"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Processing = lazy(() =>
  import("../pages/pagesForCart/processingPage/Processing")
);
const Pricing = lazy(() => import("../pages/pricing"));
 const Privacy = lazy(() => import("../pages/privacy"));
const Terms = lazy(() => import("../pages/terms"));

const TermsOfPayment = lazy(() => import("../pages/termsOfPayment"));
const TawkToChat = lazy(() => import("../components/tawkto/TawkToChat"));
const Reports = lazy(() => import("../pages/reports"));

// const EPayStatus = lazy(() => import("./pages/ePayStatus-services/EPayStatus"));
const Event = lazy(() => import("../pages/events"));
const DetailsViewPage = lazy(() =>
 import("../pages/events/viewPage/DetailsViewPage")
 );

const NotFound = lazy(() => import("../pages/notFound"));
export default function AppRoutes() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <TawkToChat></TawkToChat>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Processing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/termsOfPayment" element={<TermsOfPayment />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/corporate-events" element={<Event />} />
        <Route path="/events-view" element={<DetailsViewPage />} />
        {/* 
       
        <Route path="/services-payments" element={<EPayStatus />} />
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
