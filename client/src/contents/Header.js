import React,{useState} from "react";
import * as S from '../styled/App'
import color from '../images/color.png'
import { useHistory } from "react-router";

const Header = () => {

    let history = useHistory();

    const [onlogin, setOnlogin] = useState(false);
    
    const LoginBorder = () => {
        return(
          <S.Background>
            <S.LoginBorder>
    
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
                <span onClick={()=>setOnlogin(true)}>로그인/회원가입</span>
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