import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
// import Logo from "./icons/logo.svg";

function App() {
  return (
    <>
      <div className="w-full min-h-screen font-sans text-gray-900">
        <div>
          <img
            src="/img/blob.svg"
            alt=""
            className="absolute top-0 right-0 pointer-events-none"
          />

          <div className="px-6 mx-auto max-w-6xl">
            <Navbar />
            <Hero />
          </div>
          <Services />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
