import TravelCommentsCaption from "./TravelCommentsCaption";
import TravelCommentsCarousel from "./TravelCommentsCarousel";

export default function TravelComments() {
  return (
    <section className="bg-[#FEFCF7] py-12">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <TravelCommentsCaption />
        <TravelCommentsCarousel />
      </div>
    </section>
  );
}
