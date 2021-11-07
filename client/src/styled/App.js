import exp from "constants";
import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 30px;
    left: 50%;
    padding-bottom: 80px;
    transform: translateX(-50%);
    width: 70%;
`

export const Div = styled.div`
    margin-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    height: auto;
    padding: 20px;
    border-radius: 10px;
`

export const UDiv = styled.div`
    margin-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    width: 900px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    h2{
        font-size: 19px;
        color: dimgray;
        margin: 0px;
        margin-bottom: 5px;
    }
`

export const RegistDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

export const PB = styled.div`
    padding-bottom: 30px;
    width: 400px;

    input{
        border: 2px solid darkgray;
        outline: 0;
        height: 30px;
        width: 377px;
        padding: 0px 10px;
    }
`

export const Input = styled.input`
    border: 2px solid darkgray;
    outline: 0;
    height: 30px;
    width: 100%;
    padding: 0px 10px;
`

export const UC = styled.div`
    border: 2px solid darkgray;
    height: 30px;
    width: 363px;
    outline: 0;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ACDiv = styled.div`
    display: flex;
    button{
        width: 80px;
        outline: 0;
        border: 0;
        color: white;
        background-color: royalblue;
    }
`

export const UCDiv = styled.div`
    display: flex;
    margin-top: 10px;
`

export const Regist = styled.button`
    background-color: royalblue;
    width: 160px;
    border: 0;
    font-size: 18px;
    color: white;
    height: 40px;
    margin-top: 30px;
    border-radius: 5px;
`

export const UColor = styled.div`
    background-color: ${props => props.color};
    height: 30px;
    width: 34px;
    border: 2px solid darkgray;
    border-right: 0;
`

export const HDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
export const TDiv = styled.div`
    display: flex;
    h3{
        margin: 0;
    }

    span{
        padding-left: 10px;
        color: gray;
    }
`

export const ColorDiv = styled.div`
    position: relative;
    top: 15px;
    display: flex;
    flex-wrap: wrap;
`

export const Color = styled.div`
    background-color: ${props => props.color};
    width: 85px;
    height: 85px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Star = styled.span`
    position: relative;
    color: ${props => props.color}
`

export const CSpan = styled.span`
    width: 70px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: rgb(245, 245, 245);
`

export const Header = styled.div`
    padding-left: 15%;
    background-color: white;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
`

export const Head = styled.div`
    display: flex;
    height: 45px;
    width: 20%;
    position: relative;
    top: 7.5px;
`

export const HeadImg = styled.img`
    height: 45px;
    width: 45px;
`

export const HeadTittle = styled.h2`
    margin: 0;
    position: relative;
    top: 2.5px;
    left: 10px;
    height: 40px;
`

export const Search = styled.input`
    border: 0;
    padding: 0px 10px;
    width: 400px;
    height: 35px;
    outline: 0;
`

export const SearchBox = styled.div`
    border: 2px solid gray;
    background-color: white;
    height: 35px;
    width: 450px;
`

export const Like = styled.span`
    position: relative;
    left: 20px;
    color: dimgray;
    
    :hover{
        color: royalblue;
    }
`

export const H = styled.div`
    display: flex;
    align-items: center;
`