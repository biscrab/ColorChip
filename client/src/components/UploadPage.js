import React, { useState } from "react";
import * as S from '../styled/App'

const UploadPage = () => {

    const [list, setList] = useState([])
    const [input, setInput] = useState();

    const onChange = (value) => {
        if(!value.includes(" ")){
            setInput(value);
        }
    }

    const addColor = () => {
        if(input){
            if(input[0] === "#"){
                if(4 <= input.length&&input.length <= 7){
                setList([...list, input]);
                setInput("");
                }
            }
            else{
                if(3 <= input.length&&input.length <= 6){
                    setList([...list, "#" + input]);
                    setInput("");
                    }
            }
        }
        else{
            alert("입력을 해주세요")
        }
    }

    return(
        <S.Body>
            <S.UDiv>
                <S.RegistDiv>
                <S.PB>
                <h2>제목</h2>
                <input placeholder="제목을 입력해주세요."></input>
                </S.PB>
                <h2>색깔</h2>
                <S.ACDiv>
                <S.Input placeholder="색을 입력해주세요." onChange={(e)=>onChange(e.target.value)} value={input} />
                <button onClick={()=>addColor()}>추가</button>
                </S.ACDiv>
                {list.map(
                    i => (
                        <S.UCDiv>
                            <S.UColor color={i}/><S.UC><span>{i}</span><i class="far fa-trash-alt"></i></S.UC>
                        </S.UCDiv>
                    )
                )}
                <S.Regist>등록</S.Regist>
                </S.RegistDiv>
            </S.UDiv>
        </S.Body>
    )
}

export default UploadPage;