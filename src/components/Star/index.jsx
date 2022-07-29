import React, { useState } from 'react'
import PropTypes from "prop-types"
import * as S from './styles'

const Star = ({ onCheck }) => {
    const [checked, setChecked] = useState(false)

    const toggleClick = () => {
        setChecked(s => !s)
        !!onCheck && onCheck(checked)
    }

    return (
        <S.Wrapper active={checked} data-testid={checked} onClick={() => toggleClick()} width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4059 26.2782L7.89071 31.2809L9.70833 20.685L2 13.1817L12.6375 11.64L17.3951 2L22.1527 11.64L32.7902 13.1817L25.0818 20.685L26.8995 31.2809L17.4059 26.2782Z"
                stroke="#AEB3C5"
                strokeWidth="2.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </S.Wrapper>
    )
}

Star.propTypes = {
    onCheck: PropTypes.func,
}


export default Star