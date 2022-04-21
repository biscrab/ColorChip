import '../App.css';
import * as S from '../styled/App'
import Color from '../contents/Color';
import { useEffect, useState } from 'react';
import { useHistory, useLocation} from 'react-router-dom'
import axios from 'axios';

function MainPage() {

  let history = useHistory();
  let location = useLocation();

  const [list, setList] = useState([]);
  const [rlist, setRlist] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();

  function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start !== -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end === -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

  useEffect(()=>{
    function getAPI(){
      axios.get('http://color-chip.herokuapp.com/pallete')
        .then(res=>{
          setRlist([...res.data]);
          setList([...res.data]);
          console.log(res);
          /*const exlist = rlist.map(e => {
            e.color = JSON.parse(e.color);
            return e;
          })
          setRlist(exlist);
          console.log(exlist)*/
        })
      if(getCookie('c-token')){
        axios.get('http://color-chip.herokuapp.com/user')
          .then(res => setUser(res.data))
      }
    }
    getAPI();
  },[])
/*
  useEffect(()=>{
    function Search() {
      if(location.pathname === "/"){
        setRlist(list.filter(i => i.name.includes(search)));
      }
      else if(location.pathname === "/like"){
        setRlist(list.filter(i => i.name.includes(search)&&JSON.parse(localStorage.getItem('star').includes(i.name))));
      }
    }
    Search();
  },[search, location.pathname, list, ])*/

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
        <S.Search placeholder="검색어" onChange={(e)=>setSearch(e.target.value)}/>
        <i class="fas fa-search" style={{color:"gray"}}></i>
        </S.SearchBox>
        <button onClick={()=>goUpload()}>추가하기 +</button>
        {location.pathname === '/like'?
          <span onClick={()=>history.push('/')}>전체 목록 보기</span>
          :
          <span onClick={()=>history.push('/like')}>즐겨찾기 목록 보기</span>
        }
        </S.H> 
        <>
        {rlist.map(
          (item, index) => {
            return(
              <Color key={index} item={item} user={user}/>
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