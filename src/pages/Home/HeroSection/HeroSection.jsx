import HeroSectionCaption from "./HeroSectionCaption";
import HeroSectionImage from "./HeroSectionImage";

export default function HeroSection() {
  return (
    <section className="container space-y-4">
      <HeroSectionCaption />
      <HeroSectionImage />
    </section>
  );
}
