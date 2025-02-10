import { Quote } from "lucide-react";
import React from "react";

export default function TravelCommentsCard({ event }) {
  const { text, image, name, location } = event;
  return (
    <div className="bg-white rounded-2xl p-6 relative flex flex-col gap-6">
      <Quote className="w-6 h-6 text-yellow-500 absolute top-4 left-5" />
      <p className="text-gray-700 text-sm my-6 line-clamp-7 break-all text-justify">{text}</p>
      <div className="flex items-center mt-auto">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{name}</h4>
          <p className="text-gray-500 text-xs ">{location}</p>
        </div>
      </div>
    </div>
  );
}
