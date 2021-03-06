import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-size:21px;
    height:80px;
    width:100%;
    background-color:#A54657;
    color: #FFFFFF;

    .username{
        margin-right:1.2rem;
    }
    .title{
        margin-left:1.2rem;
        font-size:1.4em;
        font-weight:bolder;
    }
`

const TopBar = () => {
  return (
    <Wrapper>
        <div className="title">Boggle</div>
        <div className="username">Hello, User</div>
    </Wrapper>
  )
}

export  {TopBar}