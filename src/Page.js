import './App.css';
import Header from './contents/Header';
import * as S from './styled/App'
import Color from './contents/Color';
import { useEffect, useState } from 'react';
import List from './Color.json'
import { useHistory, useLocation} from 'react-router-dom'

function Page() {

  let history = useHistory();
  let location = useLocation();

  const [rlist, setRlist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    console.log(rlist);
    if(!localStorage.star){
      localStorage.setItem("star", "[]");
    }
    console.log(history);
    console.log(location);
  },[])

  function Search() {
    if(location.pathname === '/like'){
      setRlist(List.filter(i => i.name.includes(search) && JSON.parse(localStorage.star).includes(i.name)))
    }
    else{
      setRlist(List.filter(i => i.name.includes(search)));
    }
  }

  useEffect(()=>{
    if(location.pathname === '/like'){
      setRlist(List.filter(i => localStorage.star.includes(i.name)));
    }
    else{
      setRlist([...List]);
    }
  },[location.pathname])

  useEffect(()=>{
    Search();
  },[search, location.pathname])

  return (
    <>
      <Header />
      <S.Body>
        <S.H>
        <S.SearchBox>
        <S.Search placeholder="검색어" onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search" style={{color:"gray"}}></i>
        </S.SearchBox>
        {location.pathname === '/like' ?
        <S.Like onClick={() => history.push("/")}>전체 목록보기</S.Like> :
        <S.Like onClick={() => history.push("/like")}>즐겨찾기 목록보기</S.Like>
        }
        </S.H> 
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

export default Page;
