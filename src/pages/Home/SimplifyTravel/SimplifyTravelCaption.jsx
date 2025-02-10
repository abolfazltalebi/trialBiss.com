import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";

export default function SimplifyTravelCaption() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Simplify travel planning, and ensure that every step of your journey
      </h2>
      <p className="text-[#454444] text-sm text-center">
        we offer a comprehensive range of travel solutions designed to make your
        adventures seamless and unforgettable
      </p>
      <Button variant="SimplifyButton">
        Start Exploring
        <ArrowRight />
      </Button>
    </div>
  );
}
