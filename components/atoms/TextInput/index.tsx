import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:21px;
    margin-top: 20px;
    min-height:80px;
    width:100%;
    background-color:#c8e6cb;

    & input{
        margin-left:10px;
        padding:10px;
        width:300px;
        height:50px;
        font-size:21px;
    }
    & p{
        margin-left:20px;
    }
`

const TextInput = () => {
  return (
    <Wrapper>
        <div>Enter Text: </div>
        <div>
            <input type="text" />
        </div>
        <p>Press enter to select word</p>
    </Wrapper>
  )
}

export  {TextInput}