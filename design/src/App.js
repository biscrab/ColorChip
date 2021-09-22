import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'

function App() {
  return (
    <>
      <Header />
      <S.Body>
        <S.Search placeholder="검색어"/>
        <S.Div>
          <S.Tittle>스킨 컬러</S.Tittle>
            <S.ColorDiv>
              <S.Color color="red"></S.Color>
              <S.Color color="blue"></S.Color>
            </S.ColorDiv>
        </S.Div>
      </S.Body>
    </>
  );
}

export default App;
