import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";

export default function HeroSectionCaption() {

  return (
    <div className="space-y-4 flex flex-wrap md:flex-nowrap items-center">
      <h2 className="text-xl md:text-[60px] font-bold text-center md:text-left">
        Discover Your Next Great Adventure with Trail Bliss
      </h2>
      <div className="flex flex-col items-start gap-4">
        <p className="text-[#454444] text-sm text-center md:text-left">
          Uncover hidden gems, plan seamless trips, and make memories that last
          a lifetime. Your journey to bliss begins here.
        </p>
        <Button variant="heroSection">
          Start Exploring
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
