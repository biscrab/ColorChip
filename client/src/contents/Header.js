import React,{useEffect, useState} from "react";
import * as S from '../styled/App'
import color from '../images/color.png'
import { useHistory } from "react-router";
import axios from "axios";

const Header = () => {

    let history = useHistory();

    const [user, setUser] = useState({name: "", password: ""});
    const [onlogin, setOnlogin] = useState(false);
    const [input, setInput] = useState()

    useEffect(()=>{
       // axios.get('/user')
         //   .then(res => setUser(res.data))
    },[])

    const login = () => {
        axios.post('http://localhost:1312/login', input)
            .then(res => setOnlogin(false))
    }

    const signup = () => {
        axios.post('http://localhost:1312/signup', input)
            .then(res => setOnlogin(false))
    }

    const LoginBorder = () => {
        return(
          <S.Background onClick={()=>setOnlogin(false)}>
            <S.LoginBorder>
                <S.LoginHeader>
                    <h3>로그인/회원가입</h3>
                </S.LoginHeader>
                <div>
                    <input placeholder="이름" onChange={(e)=>setInput({...input, name: e.target.value})} value={input.name}/>
                    <input placeholder="비밀번호" onChange={(e)=>setInput({...input, password: e.target.value})} value={input.password}/>
                    <button onClick={()=>login()}>로그인</button>
                    <button onClick={()=>signup()}>회원가입</button>
                </div>
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
                {1 ?
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