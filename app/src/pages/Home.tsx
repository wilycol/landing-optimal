import Header from '../sections/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Portfolio from '../sections/Portfolio';
import Steps from '../sections/Steps';
import FAQ from '../sections/FAQ';
import Testimonials from '../sections/Testimonials';
import Brands from '../sections/Brands';
import Blog from '../sections/Blog';
import ContactCTA from '../sections/ContactCTA';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Steps />
        <FAQ />
        <Testimonials />
        <Brands />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
