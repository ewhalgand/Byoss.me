import styled from "styled-components"

const ButtonPrev = styled.button`
    padding: 8px 16px;
    width: 200px;
    font-size: 15px;
    font-weight: 500;
    background: #F6F6F6;
    color: #343434;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`
const ButtonNext = styled.button`
    padding: 8px 16px;
    width: 200px;
    font-size: 15px;
    font-weight: 500;
    background: #343434;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

const Button = styled.a`
    padding: 8px 16px;
    width: 150px;
    font-size: 15px;
    font-weight: 500;
    background: #F6F6F6;
    color: #343434;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    text-align: center;
`

export { ButtonPrev, ButtonNext, Button };