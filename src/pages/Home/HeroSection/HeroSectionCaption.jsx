import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";
import SplitText from "../../../components/SplitText";

export default function HeroSectionCaption() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="space-y-4 flex flex-wrap md:flex-nowrap items-center">
     
      <SplitText
        text=" Discover Your Next Great Adventure with Trail Bliss"
        className="text-xl md:text-[60px] font-bold text-center md:text-left"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
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
