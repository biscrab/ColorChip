import React, { useRef, useState, useEffect } from "react";
import * as S from '../styled/App'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const C = ({item}) => {

    const [copy, setCopy] = useState(0);
    
    useEffect(()=>{
        if(copy){
            setTimeout(()=>setCopy(0), 2000);
        }
    })

    return(
        <CopyToClipboard text={item}>
        <S.Color color={item} onClick={()=>setCopy(1)}><S.CSpan>{copy ? "copied" : item}</S.CSpan></S.Color>
        </CopyToClipboard>
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