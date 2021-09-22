import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'
import Color from './contents/Color';
import { useState } from 'react';

function App() {
  
  const [list, setList] = useState([
      {name: "스킨컬러", color:["#fde7ae","#d59f7b","#cf965f","#f8d999","#edc192","#ad8a60","#804422","#fee3c5","#f2c280","#966b49","#603411","#f9d4a0","#b0683b","#291709"]},
      {name: "오션", color:["red", "blue"]},
      {name: "플라워", color:["red", "blue"]},
      {name: "볼케이노", color:["red", "blue"]},
      {name: "블리자드", color:["red", "blue"]},
      {name: "달빛", color:["red", "blue"]},
      {name: "레트로", color:["red", "blue"]},
      {name: "레트로 소다", color:["red", "blue"]},
      {name: "네오사인", color:["red", "blue"]},
      {name: "쥬얼리", color:["red", "blue"]},
      {name: "흑백", color:["red", "blue"]},
      {name: "바닐라 밀크 쉐이크", color:["red", "blue"]},
      {name: "몽환", color:["red", "blue"]},
      {name: "할로윈", color:["red", "blue"]},
      {name: "크리스마스", color:["red", "blue"]},
      {name: "메탈릭", color:["red", "blue"]},
      {name: "핏빛", color:["red", "blue"]},
      {name: "버블검", color:["red", "blue"]},
      {name: "조선", color:["red", "blue"]},
      {name: "일출", color:["red", "blue"]},
      {name: "갤럭시", color:["red", "blue"]},
  ]); 

  return (
    <>
      <Header />
      <S.Body>
        <S.Search placeholder="검색어"/>
        {list.map(
          item => {
            return(
                <Color name={item.name} lists={item.color}/>
            )
          }
        )}
      </S.Body>
    </>
  );
}

export default App;
