import * as S from "./styles";
import PropTypes from "prop-types";

const Radio = ({ children, onCheck, id, name, value }) => {
  const handleCheked = (value) => {
    !!onCheck && onCheck({ [name]: value });
  };

  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={id}
        value={value}
        name={name}
        onChange={({ target }) => handleCheked(target.value)}
      />
      <S.Label htmlFor={id}>{children}</S.Label>
    </S.Wrapper>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  onCheck: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Radio;
