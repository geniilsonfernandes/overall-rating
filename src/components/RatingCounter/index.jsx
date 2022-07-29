import React, { useState } from "react";
import Star from "../Star";
import PropTypes from "prop-types";

import * as S from "./styles";

const RatingCounter = ({ onRating }) => {
  const [starsAmount, setStarsAmount] = useState(Array(5).fill(false));
  const [ratingCounter, setRatingCounter] = useState(0);

  const handleClick = (rating, value) => {
    const newRatingAmount = starsAmount.map((_, i) =>
      i < rating ? (ratingCounter != rating ? true : value) : false
    );
    setRatingCounter(ratingCounter < rating ? rating : 0);
    setStarsAmount(newRatingAmount);
    !!onRating && onRating(rating);
  };

  return (
    <S.Rating>
      <S.Labe2>Overall rating</S.Labe2>
      <S.RatingGrid aria-label="rating star">
        {starsAmount.map((value, index) => (
          <S.GridItem key={index} onClick={() => handleClick(index + 1, !value)}>
            <Star check={value} />
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
