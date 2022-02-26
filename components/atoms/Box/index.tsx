import React, { FC } from 'react'
import styled from "styled-components"
import { LetterCard, Timer } from "../index"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    background: orange;
    .first-line{
        display:flex;
        justify-content:center;
        flex-wrap: wrap;
        padding:10px;
    }
`;

const Box = () => {
    const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"]
    const boggleText = ["G","I","N","P","W","A","P","E","K","G","I","N","P","W","A","P"]
  return (
      <Container>
      <Timer />
      <Wrapper>
          <div className="first-line">
          {boggleText.map((item,index)=>{
              return <LetterCard key={index} text={item}/>
          })}
          </div>
          
      </Wrapper>
      </Container>
  )
}

export { Box }
