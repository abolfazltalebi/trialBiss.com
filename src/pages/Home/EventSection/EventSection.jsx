import "./Embla.css";

import EmblaCarousel from "./EmblaCarousel";
import EventSectionTitle from "./EventSectionTitle";

export default function EventSection() {
    const OPTIONS = { align: 'start' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    
  return (
    <section className="space-y-4 bg-[#FEFCF7] py-6">
      <div className="sm:ml-24 p-5 sm:p-0">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}
