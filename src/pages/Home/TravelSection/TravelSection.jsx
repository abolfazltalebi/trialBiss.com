import TraveIImageCard from "./TraveIImageCard.jsx";
import TravelHeaderSection from "./TravelHeaderSection.jsx";
import TravelInfoCard from "./TravelInfoCard";
import image1 from "@/assets/images/image1.webp";
import image2 from "@/assets/images/image2.webp";
import image3 from "@/assets/images/image3.webp";

export default function TravelSection() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container space-y-8 py-8">
        <TravelHeaderSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <TraveIImageCard image={image1} overlayPosition="bottom" />
          <TravelInfoCard />
          <TraveIImageCard image={image2} overlayPosition="top" />
          <img src={image3} alt="Travel" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
