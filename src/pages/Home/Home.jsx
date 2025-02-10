import { ArrowRight, ArrowRightCircle, Play } from "lucide-react";

import Button from "../../components/Button";
import EventSection from "./EventSection/EventSection";
import HeroSection from "./HeroSection/HeroSection";
import SimplifyTravel from "./SimplifyTravel/SimplifyTravel";
import TravelSection from "./TravelSection/TravelSection";
import TruestSection from "./TruestSection/TruestSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelSection />
      <TruestSection />
      <SimplifyTravel />
      <EventSection />
    </>
  );
}
