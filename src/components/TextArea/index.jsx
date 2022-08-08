import * as S from "./styles";
import PropTypes from "prop-types";

const TextArea = ({ placeholder, label, id, onChange, name }) => {
  const handleChange = (value) => {
    onChange && onChange({ [name]: value });
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={({ target }) => handleChange(target.value)}
      />
    </S.Wrapper>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
};

export default TextArea;
