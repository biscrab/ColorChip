import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'
import Color from './contents/Color';
import { useState } from 'react';

function App() {
  
  const [list, setList] = useState([
      {name: "스킨컬러", color:["#fde7ae","#d59f7b","#cf965f","#f8d999","#edc192","#ad8a60","#804422","#fee3c5","#f2c280","#966b49","#603411","#f9d4a0","#b0683b","#291709"]},
      {name: "오션", color:["#d3f1f9", "#01e9f8", "#00c9f2", "#018fdc", "#0056bd", "#0056bd"]},
      {name: "플라워", color:["#b6f5fc", "#a4d4f8", "#fe75bd","#83ad63", "#578c3a"]},
      {name: "볼케이노", color:["#0d0404", "#370b05", "#e43606", "#da5238", "#dc5414"]},
      {name: "블리자드", color:["#476176", "#7792a2", "#9dafbb", "#1c3340", "#647588", "#afc0c8", "#223d4f", "#dcdbe2", "#d3d7dc", "#1e334c", "#5e8494", "#5e8494"]},
      {name: "달빛", color:["#e5e5e5", "#dcdcdc", "#c9c9c9", "#8a7f8d", "#91a3b0"]},
      {name: "레트로", color:["#041026", "#051a44", "#1f0398", "#5000c3", "#7521ee", "#0099c3", "#00c38f", "#3ee3b7", "#18215d", "#503197", "#bf53c9", "#e17cb7", "#efaaa5", "#f6e0c8"]},
      {name: "네오사인", color:["#12173D", "#293268","#464B8C","#6B74B2","#909EDD","#C1D9F2","#FFCCD0","#F29FAA","#C37289","#994C69","#723352","#3F1F3C","#B22E69","#E54286","#FF6EAF","#FFA5D5","#8CFF9B","#42BC7F","#22896E","#14665B","#0F4A4C","#0A2A33","#1D1A59","#322D89","#354AB2","#3E83D1","#50B9EB","#8CDAFF","#B483EF","#854CBF","#5D2F8C","#431E66","#FFE091","#FFAA6E","#FF695A","#B23C40","#721C2F","#A52639","#DD3745","#FF6675","#78FAE6","#27D3CB","#00AAA5","#008782"]},
      {name: "쥬얼리", color:["#323232", "#7a7a7a", "#adadad", "#c3c3c3", "#eeeeee"]},
      {name: "흑백", color:["#323232", "#7a7a7a", "#adadad", "#c3c3c3", "#eeeeee"]},
      {name: "소프트 밀크", color:["#23213d","#d95b9a","#9e4491","#633662","#903d62","#bd515a","#d69a4e","#f3d040","#ffe88c","#f2f2f0","#94e092","#1f9983","#22636b","#57546f","#c56876","#76747d","#5c3841","#945848","#d17f6b","#eb9f7f","#f1c28f","#b9b5c3","#454194","#425bbd","#4884d4","#45a1de","#7cd8eb","#e2f266","#c3d442","#82aa28","#597f1e","#376129"]},
      {name: "몽환", color:["#3c42c4","#6e51c8","#a065cd","#ce79d2","#d68fb8","#dda2a3","#eac4ae","#f4dfbe",]},
      {name: "할로윈", color:["#6e3845", "#cd7f4f", "#e56a49", "#e9bc83", "#243443"]},
      {name: "크리스마스", color:["#a76f24", "#eec666", "#ee3532", "#731013", "#57691f", "#313819"]},
      {name: "메탈릭", color:[ "#6b6974", "#3c3b45", "#231d24", "#000000", "#943c0c", "#7c2a19", "#6b403d", "#4d071d", "#31181e", "#7c4d19", "#5c200a", "#cca171", "#9a6654", "#55634d", "#3f4339",]},
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
