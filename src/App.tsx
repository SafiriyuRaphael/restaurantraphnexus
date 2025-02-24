import { Route, Routes, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import History from "./pages/History";
import Contact from "./pages/Contact";
import OurTeams from "./pages/OurTeams";
import SideBar from "./components/SideBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [components, setComponents] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setComponents(location.pathname === "/");
  }, [location.pathname]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBar]);

  return (
    <div className="relative">
      <Header setSideBar={setSideBar} components={components} />
      <ScrollToTop />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />

      {/* Background overlay when sidebar is open */}
      {sideBar && (
        <div
          className="fixed inset-0 bg-black/60 transition-opacity z-50"
          onClick={() => setSideBar(false)} 
        ></div>
      )}

      <div className={`${sideBar ? "overflow-y-hidden" : ""}`}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="our-teams" element={<OurTeams />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="our-history" element={<History />} />
        </Routes>
        <Footer components={components} />
      </div>
    </div>
  );
}

export default App;
