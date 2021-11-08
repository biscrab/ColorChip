import React,{useEffect, useState} from "react";
import * as S from '../styled/App'
import color from '../images/color.png'
import { useHistory } from "react-router";
import axios from "axios";
import { useCookies } from 'react-cookie';

const Header = () => {

    let history = useHistory();

    const [user, setUser] = useState();
    const [onlogin, setOnlogin] = useState(false);
    const [input, setInput] = useState({name: "", password: ""})
    const [cookies, setCookie, removeCookie] = useCookies(['c-token']);

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
        if(getCookie('c-token')){
                   // axios.get('/user')
         //   .then(res => setUser(res.data))
        }
    },[])

    const login = () => {
        axios.post('http://localhost:1312/login', input)
            .then(res => {
                setOnlogin(false)
                setCookie('c-token', res.data)
            })
    }

    const signup = () => {
        axios.post('http://localhost:1312/signup', input)
            .then(res => setOnlogin(false))
    }

    const LoginBorder = () => {
        return(
          <S.Background>
            <S.LoginBorder className="border">
                <S.LoginHeader>
                    <h3>로그인/회원가입</h3>
                    <span onClick={()=>setOnlogin(false)}>x</span>
                </S.LoginHeader>
                <S.LDiv>
                    <input placeholder="이름" onChange={(e)=>setInput({...input, name: e.target.value})} value={input.name}/>
                    <input placeholder="비밀번호" onChange={(e)=>setInput({...input, password: e.target.value})} value={input.password}/>
                    <div>
                        <button onClick={()=>login()}>로그인</button>
                        <button onClick={()=>signup()}>회원가입</button>
                    </div>
                </S.LDiv>
            </S.LoginBorder>
          </S.Background>
        )
      }

    return(
        <>
        <S.Header>
            <S.Head onClick={()=>history.push('/')}>
                <div>
                    <img src={color}></img>
                    <h2>컬러 칩</h2>
                </div>
                {0 ?
                    <span>{1} 님</span>
                    :
                    <span onClick={()=>setOnlogin(true)}>로그인/회원가입</span>
                }
            </S.Head>
        </S.Header>
        {onlogin ?
        <LoginBorder />
        :
        <></>
        }
        </>
    )
}

export default Header;