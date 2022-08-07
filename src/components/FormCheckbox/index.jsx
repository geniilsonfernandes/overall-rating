import * as S from "./styles";
import PropTypes from "prop-types";
import { useState } from "react";

const Checkbox = ({ children, onCheck, id, name, value }) => {
  const [checked, setChecked] = useState(false);

  const handleCheked = () => {
    const status = !checked; // true => false => true
    setChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={id}
        value={value}
        name={name}
        onChange={handleCheked}
      />
      <S.Label htmlFor={id}>{children}</S.Label>
    </S.Wrapper>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  onCheck: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default Checkbox;
