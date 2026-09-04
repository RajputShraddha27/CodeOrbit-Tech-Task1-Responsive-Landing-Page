import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TravelSearch from "./components/TravelSearch";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Offer from "./components/Offer";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TravelSearch />
      <Destinations />
      <Packages />
      <Offer />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;