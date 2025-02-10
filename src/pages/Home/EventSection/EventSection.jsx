import EventSectionCarousel from "./EventSectionCarousel";
import EventSectionHeader from "./EventSectionHeader";

export default function EventSection() {
  return (
    <section className="bg-[#FEFCF7] py-12">
      <div className="sm:ml-24 p-5 sm:p-0 space-y-4">
        <EventSectionHeader />
        <EventSectionCarousel />
      </div>
    </section>
  );
}
