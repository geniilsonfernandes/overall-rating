import { useState } from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const FormInput = ({
  placeholder,
  label,
  id,
  onChange,
  type,
  name,
  errorMessage,
  onBlur
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value) => {
    setInputValue(value);
    onChange && onChange(value);
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={inputValue}
        onBlur={() => onBlur()}
        onChange={({ target }) => handleChange(target.value)}
        isError={!!errorMessage}
      />
      <S.Error>{errorMessage}</S.Error>
    </S.Wrapper>
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  errorMessage: PropTypes.string
};

export default FormInput;
