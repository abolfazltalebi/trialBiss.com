import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";

export default function TruestSectionCaption() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        Your trusted companion in discovering the world’s hidden gems{" "}
      </h2>
      <p className="text-[#454444] text-sm text-center">
        We believe that every journey has a story, and every traveler deserves
        an unforgettable experience. Founded with a passion for exploration and
        a commitment to excellence{" "}
      </p>
      <Button variant="TruestButton">
        Start Exploring
        <ArrowRight />
      </Button>
    </div>
  );
}
