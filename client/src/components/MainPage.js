import '../App.css';
import * as S from '../styled/App'
import Color from '../contents/Color';
import { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation} from 'react-router-dom'
import axios from 'axios';

function MainPage() {

  let history = useHistory();
  let location = useLocation();

  const [list, setList] = useState([]);
  const [rlist, setRlist] = useState([]);
  const [search, setSearch] = useState("");
  const [svalue, setSvalue] = useState(0);
  const [user, setUser] = useState();

  function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

  useEffect(()=>{
    console.log(rlist);
    if(!localStorage.star){
      localStorage.setItem("star", "[]");
    }
    console.log(history);
    console.log(location);

    axios.get('http://localhost:1312/pallete')
      .then(res=>{
        setRlist([...res.data]);
        /*const exlist = rlist.map(e => {
          e.color = JSON.parse(e.color);
          return e;
        })
        setRlist(exlist);
        console.log(exlist)*/
      })
    
    if(getCookie('c-token')){
      axios.get('http://localhost:1312/user')
        .then(res => setUser(res.data))
    }
  },[])

  function Search() {
    if(svalue === 0){
      setRlist(list.filter(i => i.name.includes(search)));
    }
    else if(svalue === 1){
      setRlist(list.filter(i => i.name.includes(search)&&JSON.parse(localStorage.getItem('star').includes(i.name))))
    }
    else if(svalue === 2){
      setRlist(list.filter)
    }

  }

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
          <option value={1}>즐겨찾기 목록보기{svalue}</option>
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
        <button onClick={()=>console.log(rlist)}>asd</button>
        </S.H> 
        <>
        {rlist.map(
          item => {
            return(
              <Color item={item}/>
            )
          }
        )}
        </>
      </S.Body>
    </>
  );
}

//<Color item={item}/>

export default MainPage;

  /*
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
  },[svalue])*/