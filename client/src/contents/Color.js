import React, { useRef, useState, useEffect } from "react";
import * as S from '../styled/App'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const C = ({color}) => {

    const [copy, setCopy] = useState(0);
    
    const Copy = () => {
        setCopy(1);
        setTimeout(()=>setCopy(0), 2000);
    }

    return(
        <CopyToClipboard text={color}>
            <S.Color color={color} onClick={()=>Copy()}><S.CSpan>{copy ? "복사됨" : color}</S.CSpan></S.Color>
        </CopyToClipboard>
    );
}

const Color = ({item}) => {

    const [like, setLike] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('star').includes(item.name)){
            setLike(true);
        }   
        else{
            setLike(false)
        }
    },[])

    function setStar() {

        var s = JSON.parse(localStorage.getItem('star'));

        if(s.includes(item.name)){

            function Delete(value) {
                return value !== item.name;
            }

            s = s.filter(Delete);
            setLike(false);
        }
        else{
            s.push(item.name);
            setLike(true);
        }

        localStorage.star = JSON.stringify(s);
        console.log(s);
    }

    return(
        <S.Div>
            <S.HDiv>

            <S.TDiv>
            <div>
            <h3>{item.name}</h3>
            <span>made by {item.master}</span>
            </div>
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
            </S.TDiv>

            <S.ColorDiv>

            </S.ColorDiv>
            </S.HDiv>
        </S.Div>
    );

    /*            {color.map(
                i => {
                    return(
                        <C color={i} />
                    );
                }
            )} */
}

export default Color

/*            {JSON.parse(item.color).map(
                i => {
                    return(
                        <C color={i} />
                    );
                }
            )}   */