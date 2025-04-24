
import Hero from "@/components/home/hero-section";
import LusionComponent from "@/components/home/about-section";
import ProjectsSection from "@/components/home/project-section";
import CardDeck from "@/components/home/main.section";
import Footer from "@/components/common/footer";
export default function Home() {
  return (
    <>

      <Hero />
      <LusionComponent />
      <ProjectsSection />
      <CardDeck />
      <Footer />
    </>
  );
}
