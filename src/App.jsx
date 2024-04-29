import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/program";
import Services from "./components/Services/services";
import WhyWeAreNo1 from "./components/WhyWeAreNo1/WhyWeAreNo1";
import ContactForm from "./components/ContactForm/ContactForm";
import AboutMe from "./components/AboutMe/AboutMe";
import Faq from "./components/Faq/Faq";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe className="container" />
      <div className="container">
        <Programs />
      </div>
      <WhyWeAreNo1 className="mt-5 mb-4" />
      <ContactForm />
      <Services />
      < Faq />
    </div>
  );
};

export default App;
