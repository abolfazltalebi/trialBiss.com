import { ArrowRight, ArrowRightCircle, Play } from "lucide-react";

import Button from "../../components/Button";
import HeroSection from "./HeroSection/HeroSection";
import image1 from "@/assets/images/image1.webp";
import image2 from "@/assets/images/image2.webp";
import image3 from "@/assets/images/image3.webp";
import TravelSection from "./TravelSection/TravelSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TravelSection />
    </>
  );
}
