import * as S from "./styles";
import PropTypes from "prop-types";

const UserDisplay = ({ user, excerpt, src }) => {

  return (
    <S.Wrapper>
      <S.Photo src={src} alt={user} />
      <S.Content>
        <S.Title>{user}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
      </S.Content>
    </S.Wrapper>
  );
};

UserDisplay.propTypes = {
  user: PropTypes.string,
  excerpt: PropTypes.string,
  src: PropTypes.string,
};

export default UserDisplay;
