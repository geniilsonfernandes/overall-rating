import { format } from "date-fns";
import StarIcon from "../StarCheckbox";
import PropTypes from "prop-types";
import { UserIcon } from "../../Icons/index";

import * as S from "./styles";

// eslint-disable-next-line no-unused-vars
const RatingCard = ({ rating, author, date, title, review }) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.HeadGroup>
          <S.HeadItem>
            <StarIcon check={true} />
            <span>{rating} Rating</span>
          </S.HeadItem>
          <S.HeadItem>
            <UserIcon />
            <span>By: {author}</span>
          </S.HeadItem>
        </S.HeadGroup>
        <S.HeadDate>
          <span>{format(date, "MM/dd/yyyy")}</span>
        </S.HeadDate>
      </S.Head>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Review>{review}</S.Review>
      </S.Content>
    </S.Wrapper>
  );
};

RatingCard.propTypes = {
  rating: PropTypes.number,
  author: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  review: PropTypes.string
};

export default RatingCard;
