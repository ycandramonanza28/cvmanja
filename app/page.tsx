import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
import KatalogSection from "./components/KatalogSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import { CTABanner, Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="grain">
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      <KatalogSection />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
