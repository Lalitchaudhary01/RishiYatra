import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
// import GLASpecial from "./components/GLASpecial";
// import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Itinerary from "./components/Itinerary";

export default function App() {
  const [isVisible, setIsVisible] = useState({});

  // Simple animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;

        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Nav />
      <Hero />
      <Activities isVisible={isVisible} />
      <Itinerary isVisible={isVisible} />
      {/* <GLASpecial isVisible={isVisible} /> */}
      {/* <Packages isVisible={isVisible} /> */}
      <Gallery isVisible={isVisible} />
      <CTA />
      <Footer />
    </div>
  );
}
