import React, {useState} from "react";
import Header from "../components/Header";
import Companies from "../components/landingPage/Companies";
import Hero from "../components/landingPage/hero/Hero";
import HowItWorks from "../components/landingPage/HowItWorks";
import Meals from "../components/landingPage/Meals";
import Testimonials from "../components/landingPage/testimonials/Testimonials";
import Pricing from "../components/landingPage/pricing/Pricing";
import CallToAction from "../components/landingPage/CallToAction";
import Footer from "../components/landingPage/Footer";

const LandingPage = () => {

  const [addSticky,setAddSticky] = useState(false);

  return (
    <div className="landing-page">
      <Header addStickyValue = {addSticky} />
      <main>
        <Hero setAddSticky = {setAddSticky} />
        <Companies />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

//
