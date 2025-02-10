import "swiper/swiper-bundle.css";
import './Travel.css'

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TravelCommentsCard from "./TravelCommentsCard";
import { TravelItems } from "../../../constanst/TravelItems";

export default function TravelCommentsCarousel() {
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
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {TravelItems.map((event) => (
          <SwiperSlide key={event.id}>
            <TravelCommentsCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
