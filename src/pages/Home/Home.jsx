import { ArrowRight, ArrowRightCircle, Play } from "lucide-react";

import Button from "../../components/Button";
import HeroSection from "./HeroSection/HeroSection";
import TravelSection from "./TravelSection/TravelSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelSection />
    </>
  );
}
