import "swiper/swiper-bundle.css";
import './Event.css'

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import EventCard from "./EventCard";
import { EventItem } from "../../../constanst/EventItems";

export default function EventSectionCarousel() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
         
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {EventItem.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ); 
}
