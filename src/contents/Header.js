import React from "react";
import * as S from '../styled/App'
import color from '../images/color.png'
import { useHistory } from "react-router";

const Header = () => {

    let history = useHistory();

    return(
        <S.Header>
            <S.Head onClick={()=>history.push('/')}>
                <S.HeadImg src={color}></S.HeadImg>
                <S.HeadTittle>컬러 칩</S.HeadTittle>
            </S.Head>
        </S.Header>
    )
}

export default Header;