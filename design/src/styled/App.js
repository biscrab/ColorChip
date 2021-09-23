import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    width: 900px;
    flex-direction: column;
    position: relative;
    top: 30px;
    left: 50%;
    padding-bottom: 80px;
    transform: translateX(-50%);
`

export const Div = styled.div`
    margin-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    width: 900px;
    height: auto;
    padding: 20px;
    border-radius: 10px;
`

export const Tittle = styled.h3`
    margin: 0;
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

export const CSpan = styled.span`
    width: 70px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: rgb(245, 245, 245);
`

export const Header = styled.div`
    display: flex;
    align-content: center;
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
    width: 130px;
    position: relative;
    left: 300px;
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