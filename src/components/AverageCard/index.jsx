import * as S from "./styles";
import PropTypes from "prop-types";
import StarIcon from "../StarCheckbox";

const AverageCard = ({ rating }) => {
  return (
    <S.Wrapper>
      <S.Average>
        <StarIcon check />
        {rating}
      </S.Average>
      <S.SubTitle>Average customer rating</S.SubTitle>
    </S.Wrapper>
  );
};

AverageCard.propTypes = {
  rating: PropTypes.number
};

export default AverageCard;
