import HeroSectionCaption from "./HeroSectionCaption";
import HeroSectionImage from "./HeroSectionImage";

export default function HeroSection() {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
      <HeroSectionCaption />
      <HeroSectionImage />
    </section>
  );
}
