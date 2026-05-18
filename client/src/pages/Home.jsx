import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import FeatureCards from "../components/FeatureCards";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <UploadSection />
      <FeatureCards />
    </div>
  );
}

export default Home;