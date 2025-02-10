import EventImage1 from "@/assets/images/EventImage1.webp";
import EventImage2 from "@/assets/images/EventImage2.webp";
import EventSectionTitle from "./EventSectionTitle";
import PropTypes from "prop-types";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const slides = [
    {
      image: EventImage1,
      month: "January",
      title: "Explore Dubai’s Hidden Gems",
      description: "Discover breathtaking landscapes with curated nature travel events.",
    },
    {
      image: EventImage2,
      month: "February",
      title: "Best time in Europe 2025",
      description: "Discover breathtaking landscapes with curated nature travel events.",
    },
    {
      image: EventImage1,
      month: "January",
      title: "Explore Dubai’s Hidden Gems",
      description: "Discover breathtaking landscapes with curated nature travel events.",
    },
    {
      image: EventImage2,
      month: "February",
      title: "Best time in Europe 2025",
      description: "Discover breathtaking landscapes with curated nature travel events.",
    },
  
  ];
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla space-y-4">
      <EventSectionTitle emblaApi={emblaApi} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="bg-white p-3 rounded-2xl space-y-4">
                <div>
                  <img src={slide.image} alt="" />{" "}
                </div>
                <div className="space-y-4">
                  <div className="bg-[#fff9ea] rounded-full px-4 py-1.5 inline-block">
                    <p className="text-xs">{slide.month}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-4">
                      <h2 className="font-bold text-sm">
                        {slide.title}
                      </h2>
                      <p className="text-xs">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

EmblaCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  options: PropTypes.object.isRequired,
};

export default EmblaCarousel;
