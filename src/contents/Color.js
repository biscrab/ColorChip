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
        <S.Color color={item} onClick={()=>setCopy(1)}><S.CSpan>{copy ? "복사됨" : item}</S.CSpan></S.Color>
        </CopyToClipboard>
    );
}

const Color = ({lists, name}) => {


    function setStar() {
        var s = JSON.parse(localStorage.getItem('star'));
        /*
        if(S.include(name)){
            s.splice(s.indexOf(name),1);
        }
        else{
            s.push(name);
        }

        localStorage.star = JSON.stringify(s);*/
    }

    return(
        <S.Div>
            <S.HDiv>
            <S.Tittle>{name}</S.Tittle>
            <S.Star>
                <i class="far fa-star fa-lg"></i>
            </S.Star>
            </S.HDiv>
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