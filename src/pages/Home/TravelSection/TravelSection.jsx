import TravelHeaderSection from "./TravelHeaderSection";
import TraveIImageCard from "./TraveIImageCard.JSX";
import TravelInfoCard from "./TravelInfoCard";

export default function TravelSection({ images = [] }) {
  if (!images || images.length < 3) return null;
  return (
    <section className="bg-[#FAFAFA]">
      <div className="container space-y-8 py-8">
        <TravelHeaderSection />
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <TraveIImageCard image={images[0]} overlayPosition="bottom" />
          <TravelInfoCard />
          <TraveIImageCard image={images[1]} overlayPosition="top" />
          <img src={images[2]} alt="Travel" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
