import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Hero/components/Company";
import Service from "./components/Service/Service";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import WorkingProcess from "./components/WorkingProcess/WorkingProcess";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div className="px-3 tablet:px-[40px] lg:px-[70px] laptop:px-[100px] m-auto">
      {/* Header */}
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Company */}
        <Company />

        {/* Services */}
        <Service />

        {/* Case Studies */}
        <CaseStudies />

        {/* Working Process */}
        <WorkingProcess />

        {/* Team */}
        <Team />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact us */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
