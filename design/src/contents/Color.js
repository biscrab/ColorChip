import React, { useRef, useState } from "react";
import * as S from '../styled/App'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const C = ({item}) => {

    const textRef = useRef();
    
    const Copy = () => {
        var text = textRef.current
    }

    return(
        <S.Color color={item} onClick={()=>Copy()}><S.CSpan ref={textRef}>{item}</S.CSpan></S.Color>
    );
}

const Color = ({lists, name}) => {
    return(
        <S.Div>
          <S.Tittle>{name}</S.Tittle>
            <S.ColorDiv>
            {lists.map(
                item => {
                    return(
                        <C item={item} />
                    );
                }
            )}
            </S.ColorDiv>
        </S.Div>
    );
}

export default Color