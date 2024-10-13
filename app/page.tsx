import Hero from "@/components/HeroSection"
import Contact from "@/components/ContactSection"
import About from "@/components/AboutSection"
import Products from "@/components/ProductsSection"

export default function Home() {
  return <div className="font-poppins">
    <Hero/>
    <Products/>
    <About/>
    <Contact/>

  </div>;
}
