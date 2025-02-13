import SimplifyTravelCaption from "./SimplifyTravelCaption";
import SimplifyTravelImage from "./SimplifyTravelImage";

export default function SimplifyTravel() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 py-12 container">
      <SimplifyTravelImage />
      <SimplifyTravelCaption />
    </section>
  );
}
