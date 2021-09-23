import React from "react";
import * as S from '../styled/App'
import color from '../images/color.png'

const Header = () => {
    return(
        <S.Header>
            <S.Head>
                <S.HeadImg src={color}></S.HeadImg>
                <S.HeadTittle>컬러 칩</S.HeadTittle>
            </S.Head>
        </S.Header>
    )
}

export default Header;