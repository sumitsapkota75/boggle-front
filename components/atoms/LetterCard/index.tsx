import React, { FC } from 'react'
import styled from "styled-components"

interface IProps{
    text: string
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:55px;
    height:55px;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: background 0.5s;
    outline: none;
    text-transform: uppercase;
    background: #fff;
    border: solid 1px #757575;
    box-shadow: 2px 2px 5px rgb(255 204 128 / 25%);
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    color: #18252e;

    &:hover{
        cursor: pointer;
        transform:scale(1.1);
       transition: all .3s ease-out;
    }
`;

const LetterCard= ({text}: IProps) => {
  return (
      <Wrapper>
          <div>{text}</div>
      </Wrapper>
  )
}

export {LetterCard}
