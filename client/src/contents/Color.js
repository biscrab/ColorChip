import React, { useRef, useState, useEffect } from "react";
import * as S from '../styled/App'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const C = ({item}) => {

    const [copy, setCopy] = useState(0);
    
    const Copy = () => {
        setCopy(1);
        setTimeout(()=>setCopy(0), 2000);
    }

    return(
        <CopyToClipboard text={item}>
        <S.Color color={item} onClick={()=>Copy()}><S.CSpan>{copy ? "복사됨" : item}</S.CSpan></S.Color>
        </CopyToClipboard>
    );
}

const Color = ({lists, name}) => {

    const [like, setLike] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('star').includes(name)){
            setLike(true);
        }   
        else{
            setLike(false)
        }
    },[])

    function setStar() {

        var s = JSON.parse(localStorage.getItem('star'));

        if(s.includes(name)){

            function Delete(value) {
                return value !== name;
            }

            s = s.filter(Delete);
            setLike(false);
        }
        else{
            s.push(name);
            setLike(true);
        }

        localStorage.star = JSON.stringify(s);
        console.log(s);
    }

    return(
        <S.Div>
            <S.HDiv>
            <S.TDiv>
            <h3>{name}</h3>
            <span>made by</span>
            </S.TDiv>
            <>
            {like === true ?
            <S.Star onClick={()=>setStar()} color="gold"> 
                <i class="fas fa-star"></i>
            </S.Star>
            :
            <S.Star onClick={()=>setStar()}> 
                <i class="far fa-star"></i>
            </S.Star>
            }
            </>
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