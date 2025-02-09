import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";

export default function HeroSectionCaption() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Discover Your Next Great Adventure with Trail Bliss
      </h2>
      <p className="text-[#454444] text-sm text-center">
        Uncover hidden gems, plan seamless trips, and make memories that last a
        lifetime. Your journey to bliss begins here.
      </p>
      <Button variant="heroSection">
        Start Exploring
        <ArrowRight />
      </Button>
    </div>
  );
}
