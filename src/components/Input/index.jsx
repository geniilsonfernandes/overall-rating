import * as S from "./styles";
import PropTypes from "prop-types"

const Input = ({ placeholder, label, id, onChange, type, name }) => {
  const handleChange = (value) => {
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
        onChange={({ target }) => handleChange(target.value)}
      />
    </S.Wrapper>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

export default Input;
