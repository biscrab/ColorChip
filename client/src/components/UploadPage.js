import React, { useState } from "react";
import * as S from '../styled/App'

const UploadPage = () => {

    const [list, setList] = useState([])
    const [input, setInput] = useState();

    const addColor = () => {
        setList([...list, input]);
        setInput("");
    }

    return(
        <S.Body>
            <S.UDiv>
                <S.PB>
                <h2>제목</h2>
                <input></input>
                </S.PB>
                <h2>색깔</h2>
                <S.ACDiv>
                <input onChange={(e)=>setInput(e.target.value)} value={input}></input>
                <button onClick={()=>addColor()}>추가</button>
                </S.ACDiv>
                {list.map(
                    i => (
                        <S.UCDiv>
                            <S.UColor color={i}/><S.UC></S.UC>
                        </S.UCDiv>
                    )
                )}
            </S.UDiv>
        </S.Body>
    )
}

export default UploadPage;