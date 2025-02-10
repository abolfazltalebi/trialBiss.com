import heroSection from "@/assets/images/heroSection.webp";

export default function HeroSectionImage() {
  return (
    <div>
    <img src={heroSection} className="w-full h-[250px] md:h-auto bg-cover" alt="" />
  </div>
  )
}
