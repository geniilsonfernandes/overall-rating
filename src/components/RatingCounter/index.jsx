import React, { useState } from "react";
import StarIcon from "../StarCheckbox";
import PropTypes from "prop-types";

import * as S from "./styles";

const RatingCounter = ({ onRating }) => {
  const [starsAmount, setStarsAmount] = useState(Array(5).fill(false));
  const [ratingCounter, setRatingCounter] = useState(0);

  const handleClick = (rating) => {
    const newRatingAmount = starsAmount.map((_, i) =>
      i < rating ? (ratingCounter != rating ? true : false) : false
    );

    setStarsAmount(newRatingAmount);
    setRatingCounter(ratingCounter === rating ? 0 : rating);
    !!onRating && onRating(ratingCounter === rating ? 0 : rating);
  };

  return (
    <S.Rating>
      <S.Labe2>Overall rating</S.Labe2>
      <S.RatingGrid aria-label="rating star">
        {starsAmount.map((value, index) => (
          <S.GridItem
            key={index}
            onClick={() => handleClick(index + 1)}
            type="button"
          >
            <StarIcon check={value} />
          </S.GridItem>
        ))}
      </S.RatingGrid>
      <S.Helper>Click to rate</S.Helper>
    </S.Rating>
  );
};

RatingCounter.propTypes = {
  onRating: PropTypes.func
};

export default RatingCounter;
