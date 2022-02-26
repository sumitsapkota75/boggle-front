import React, { FC } from 'react'
import styled from "styled-components"
import { LetterCard } from '..';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    
    .first-line{
        padding:10px;
        background-color:orange;        
    }
`;

const Box = () => {
    const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"]
    const boggleText = ["G","I","N","P","W","A","P","E","K","G","I","N","P","W","A","P"]
  return (
      <Wrapper>
          <div className="first-line">
          {boggleText.map((item,index)=>{
              return <LetterCard key={index} text={item}/>
          })}
          </div>
          
      </Wrapper>
  )
}

export { Box }
