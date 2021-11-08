import '../App.css';
import * as S from '../styled/App'
import Color from '../contents/Color';
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation} from 'react-router-dom'
import List from '../Color.json'
import axios from 'axios';

function MainPage() {

  let history = useHistory();
  let location = useLocation();

  const [list, setList] = useState([]);
  const [rlist, setRlist] = useState([]);
  const [search, setSearch] = useState("");
  const [svalue, setSvalue] = useState();
  const [user, setUser] = useState();

  useEffect(()=>{
    console.log(rlist);
    if(!localStorage.star){
      localStorage.setItem("star", "[]");
    }
    console.log(history);
    console.log(location);
    axios.get('http://localhost:1312/pallete')
      .then(res => setList(...res.data))
  },[])

  function Search() {
    if(svalue === 1){
      setRlist(List.filter(i => i.name.includes(search) && JSON.parse(localStorage.star).includes(i.name)))
    }
    else{
      setRlist(List.filter(i => i.name.includes(search)));
    }
  }

  useEffect(()=>{
    axios.get('http://localhost:1312/user')
      .then(res => setUser(res.data))
  },[])

  useEffect(()=>{
    if(svalue === 1){
      setRlist(List.filter(i => localStorage.star.includes(i.name)));
    }
    else if(svalue === 2){
      setRlist(List.filter(i => i.master === user))
    }
    else{
      setRlist([...List]);
    }
  },[svalue])

  useEffect(()=>{
    Search();
    console.log(svalue)
  },[search, svalue])

  const goUpload = () => {
    if(user){
      history.push('/upload')
    }
    else{
      alert("로그인을 해주세요")
    }
  }

  return (
    <>
      <S.Body>
        <S.H>
        <S.SearchBox>
        <select onChange={(e)=>setSvalue(e.target.value)}>
          <option value={0}>전체 목록보기</option>
          <option value={1}>즐겨찾기 목록보기</option>
          {user ?
          <option value={2}>내 팔레트 목록보기</option>
          :
          <></>
          }
        </select>
        <S.Search placeholder="검색어" onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search" style={{color:"gray"}}></i>
        </S.SearchBox>
        <button onClick={()=>goUpload()}>추가하기 +</button>
        </S.H> 
        {rlist.map(
          item => {
            return(
                <Color name={item.name} master={item.master} lists={item.color}/>
            )
          }
        )}
      </S.Body>
    </>
  );
}

export default MainPage;
