import { NextButton, PrevButton } from "./EmblaCarouselArrowButtons";

import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";

export default function EventSectionTitle({ emblaApi }) {
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex items-center justify-center sm:justify-between gap-4 ">
      <div>
        <h2 className="text-xl font-bold">
          Unforgettable Moments with Unique Events.
        </h2>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
