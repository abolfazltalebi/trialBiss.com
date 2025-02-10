import UniqEventSectionCaption from "./UniqEventSectionCaption";
import UniqEventSectionHeader from "./UniqEventSectionHeader";
import UniqEventSectionImga from "./UniqEventSectionImga";

export default function UniqEventSection() {
  return (
    <section className="container py-10 space-y-5">
      <UniqEventSectionHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
        <UniqEventSectionImga />
        <UniqEventSectionCaption />
      </div>
    </section>
  );
}
