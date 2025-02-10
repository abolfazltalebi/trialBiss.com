
export default function EventCard({event}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden p-4 space-y-4">
      <img
        src={event.image}
        alt={event.title}
        className="rounded-[16px] object-cover"
      />
      <div className="space-y-4">
        <span className="text-sm text-gray-500">{event.month}</span>
        <h2 className="text-lg font-semibold text-gray-800 mt-2 capitalize">
          {event.title}
        </h2>
        <p className="text-gray-600 mt-2 text-sm">{event.description}</p>
        <div className="mt-4 text-right">
          <span className="text-gray-800 font-bold text-lg">
            Starts from ${event.price}
          </span>
        </div>
      </div>
    </div>
  );
}
