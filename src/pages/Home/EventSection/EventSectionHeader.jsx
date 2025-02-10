import Button from "../../../components/Button";

export default function EventSectionHeader() {
  return (
    <div className="flex items-center flex-wrap sm:flex-nowrap sm:justify-between sm:pr-12 gap-6">
      <div>
        <h2 className="font-bold text-xl ">
          Unforgettable Moments with Unique Events.
        </h2>
      </div>
      <div>
        <Button variant="EventButton">all event</Button>
      </div>
    </div>
  );
}
