import PropTypes from "prop-types";

import * as S from "./styles";

const TextArea = ({
  placeholder,
  label,
  id,
  onChange,
  name,
  errorMessage,
  onBlur
}) => {
  const handleChange = (value) => {
    onChange && onChange(value);
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        placeholder={placeholder}
        id={id}
        name={name}
        onBlur={() => onBlur()}
        onChange={({ target }) => handleChange(target.value)}
        isError={!!errorMessage}
      />
      <S.Error>{errorMessage}</S.Error>
    </S.Wrapper>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  errorMessage: PropTypes.string
};

export default TextArea;
