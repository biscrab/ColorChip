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
    var list = List;
    list = list.filter(i => i.name.includes(search))
    setRlist(list);
  }

  useEffect(()=>{
    Search();
  },[search])

  return (
    <>
      <Header />
      <S.Body>
        <S.SearchBox>
        <S.Search placeholder="검색어" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search" style={{color:"gray"}}></i>
        </S.SearchBox>
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
