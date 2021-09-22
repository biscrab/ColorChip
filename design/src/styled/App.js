import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    width: 900px;
    flex-direction: column;
    position: relative;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
`

export const Div = styled.div`
    margin-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    width: 900px;
    height: 250px;
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
`

export const Color = styled.div`
    background-color: ${props => props.color};
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CSpan = styled.span`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0px 10px; 
    color: rgb(245, 245, 245);
`

export const Header = styled.div`
    background-color: white;
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    align-content: center;
`

export const HeadImg = styled.img`
    height: 45px;
    width: 45px;
`

export const HeadTittle = styled.h2`
    margin: 0;
    position: relative;
    left: 10px;
`

export const Search = styled.input`
    border: 2px solid gray;
    padding: 0px 10px;
    height: 30px;
    width: 400px;
`