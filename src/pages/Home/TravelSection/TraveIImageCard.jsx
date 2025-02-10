import { ArrowRight } from "lucide-react";
import Button from "../../../components/Button";

export default function TraveIImageCard({ image, overlayPosition }) {
  return (
    <div className="relative group">
      <img src={image} alt="Travel" className="rounded-xl" />
      <div
        className={`absolute ${overlayPosition}-3  rounded-full w-[98%] ml-1 h-[45px] 
      transition-all duration-500 px-5 bg-white/20 backdrop-blur-md flex items-center justify-between
      ${
        overlayPosition === "top"
          ? "group-hover:top-[40%] group-hover:rounded-2xl"
          : "group-hover:top-[40%]"
      }`}
      >
        <p className="text-white text-sm">Explore our adventures</p>
        <Button>
          <ArrowRight className="bg-[#ED952B] rounded-full p-1 text-white -rotate-45 transition duration-400 size-7 group-hover:rotate-0 group-hover:size-8" />
        </Button>
      </div>
    </div>
  );
}
