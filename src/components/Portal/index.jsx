import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as S from "./styles";

export const Portal = ({ children, clickOutSide, root }) => {
  const overlayerEl = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => (document.body.style.overflow = null);
  }, []);

  const handleClickOutSide = (e) => {
    e.target === overlayerEl.current && clickOutSide();
  };

  return createPortal(
    <S.Portal onClick={(e) => handleClickOutSide(e)} ref={overlayerEl}>
      {children}
    </S.Portal>,
    document.getElementById(root)
  );
};

export default Portal;
