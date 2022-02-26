import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:21px;
    gap:50px;
    height:80px;
    width:100%;

    .reset {
      width:200px;
      display: flex;
      align-items: center;
      justify-content:center;
      background-image: linear-gradient(92.88deg, #e72727 9.16%, #e03434 43.89%, #e93939 64.72%);
      border-radius: 8px;
      border-style: none;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      flex-shrink: 0;
      font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
      font-size: 16px;
      font-weight: 500;
      height: 4rem;
      padding: 0 1.6rem;
      text-align: center;
      text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
      transition: all .5s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    .submit{
      width:200px;
      display: flex;
      align-items: center;
      justify-content:center;
      background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
      border-radius: 8px;
      border-style: none;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      flex-shrink: 0;
      font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
      font-size: 16px;
      font-weight: 500;
      height: 4rem;
      padding: 0 1.6rem;
      text-align: center;
      text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
      transition: all .5s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
}
`

const BottomBar = () => {
  return (
    <Wrapper>
        <div className="submit">Submit</div>
        <div className="reset">Reset</div>
    </Wrapper>
  )
}

export  { BottomBar }