import EventSection from "./EventSection/EventSection";
import HeroSection from "./HeroSection/HeroSection";
import SimplifyTravel from "./SimplifyTravel/SimplifyTravel";
import TravelComments from "./TravelComments/TravelComments";
import TravelSection from "./TravelSection/TravelSection";
import TruestSection from "./TruestSection/TruestSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelSection />
      <TruestSection />
      <EventSection />
      <SimplifyTravel />
      <TravelComments/>
    </>
  );
}
