import React, { useState, useEffect } from "react";
import * as S from '../styled/App'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios";

const C = (color) => {

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

const Color = (item, user) => {

    const [like, setLike] = useState(false);

    const [color, setColor] = useState([]);

    useEffect(()=>{
        function getColor(){
            if(localStorage.getItem('star')){
                if(localStorage.getItem('star').includes(item.name)){
                    setLike(true);
                }   
                else{
                    setLike(false)
                }
            }
            else{
                setLike(false);
            }
            var c = item.color;
            c = c.replaceAll(".", "#");
            var arr = [];
            arr = c.split("#");
            arr.shift();
            arr = arr.map(
                i => {
                    return "#" + i;
                }
            )
            setColor([...arr]);
            console.log(item.color);
            console.log(color);
        }
        getColor();
    },[color, item.color, item.name, ])

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

    const deletePallete = () => {
        axios.delete(`http://color-chip.herokuapp.com/pallete/${item.name}`)
            .then(res => {
                alert(res.data);
                window.location.reload();
            })
    }

    return(
        <S.Div>
            <S.HDiv>

            <S.TDiv>
            <S.THead>
                <h3>{item.name}</h3>
                <span>made by {item.master}</span>
                {user === item.master ?
                    <i class="far fa-trash-alt" onClick={()=>deletePallete()}/>
                    :
                    <></>
                }
            </S.THead>
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
            {color.map(
                (i, index) => {
                    return(
                        <C color={i} key={index} />
                    );
                })
            }
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