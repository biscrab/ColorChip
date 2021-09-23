import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'
import Color from './contents/Color';
import { useEffect, useState } from 'react';
import List from './Color.json'

function App() {

  const [rlist, setRlist] = useState([...List]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    console.log(rlist);
  },[])

  function Search() {
  }

  return (
    <>
      <Header />
      <S.Body>
        <S.Search placeholder="검색어" onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={Search()}>검색</button>
        {rlist.map(
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
