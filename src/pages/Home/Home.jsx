import { ArrowRight, ArrowRightCircle } from "lucide-react";

import Button from "../../components/Button";
import HeroSection from "./HeroSection/HeroSection";
import image1 from "@/assets/images/image1.webp";
import image2 from "@/assets/images/image2.webp";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-[#FAFAFA]">
        <div className="container space-y-8 py-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">
              Travel Tales That Inspire Adventure
            </h2>
            <p className="text-[#454444] text-sm text-center">
              Prepare for the journey of a lifetime! Explore our unforgettable
              experiences.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group">
              <div>
                <img src={image1} alt="" />
              </div>
              <div className="absolute bottom-3 rounded-full w-[98%] ml-1 h-[45px] px-5 bg-white/20 backdrop-blur-md flex items-center justify-between">
                <p className="text-white text-lg">Explore our adventures</p>
                <Button className="">
                  <ArrowRight className="bg-[#ED952B] rounded-full p-1 text-white -rotate-45 transition duration-400 size-7 group-hover:rotate-0 group-hover:size-8" />
                </Button>
              </div>
            </div>
            <div className="space-y-4 bg-[#D3F5FE] p-3 rounded-2xl">
              <h2 className="text-xl font-bold text-center">
                Let's Explore in a Group Tour
              </h2>
              <p className="text-[#454444] text-xs text-center">
                At Trail Bliss, the world is our playground. and every journey
                is an opportunity to discover something new. Join us as we
                explore thunders of the world and create memories that will last
                a lifetime.
              </p>
            </div>
            <div className="relative group">
              <div>
                <img src={image2} alt="" />
              </div>
              <div className="absolute top-3 rounded-full w-[98%] ml-1 h-[45px] group-hover:h-full group-hover:rounded-2xl transition-all duration-100 px-5 bg-white/20 backdrop-blur-md flex items-center justify-between">
                <p className="text-white text-lg">Explore our adventures</p>
                <Button className="">
                  <ArrowRight className="bg-[#ED952B] rounded-full p-1 text-white -rotate-45 transition duration-400 size-7 group-hover:rotate-0 group-hover:size-8" />
                </Button>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
