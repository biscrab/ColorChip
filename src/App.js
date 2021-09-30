import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'
import Color from './contents/Color';
import { useEffect, useState } from 'react';
import List from './Color.json'

function App() {

  const [rlist, setRlist] = useState([...List]);
  const [search, setSearch] = useState("");
  const [like, setLike] = useState(false);

  useEffect(()=>{
    console.log(rlist);
  },[])

  function Search() {
    if(like === true){
      setRlist(List.filter(i => i.name.includes(search)));
    }
    else{
      setRlist(List.filter(i => i.name.includes(search) && JSON.parse(localStorage.star).includes(i.name)))
    }
  }

  useEffect(()=>{
    Search();
  },[search])

  const FindLike = () => {
    if(like === true){
      setRlist([...List])
      setLike(false);
    }
    else{
      setRlist(List.filter(i => JSON.parse(localStorage.star).includes(i.name)));
      setLike(true);
    }
  }

  return (
    <>
      <Header />
      <S.Body>
        <S.H>
        <S.SearchBox>
        <S.Search placeholder="검색어" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search" style={{color:"gray"}}></i>
        </S.SearchBox>
        {like === false ?
        <S.Like onClick={() => FindLike()}>즐겨찾기 목록보기</S.Like>
        : <S.Like onClick={() => FindLike()}>전체 목록보기</S.Like>
        }
        </S.H> 
        {rlist ?
        <>
        {rlist.map(
          item => {
            return(
                <Color name={item.name} lists={item.color}/>
            )
          }
        )}
        </>:
        <h3>해당하는 팔레트가 없습니다.</h3>
        }
      </S.Body>
    </>
  );
}

export default App;
