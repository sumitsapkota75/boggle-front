import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components'
import { BottomBar, Box, ScoreBox, TextInput, Timer, TopBar } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MiddleSection = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
  align-items: center;
  margin:60px 0px 60px 0px;
  position: relative;

  & .scorebox{
    position: absolute;
    right:60px;
  }
  @media(max-width:768px){
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;


const Home: NextPage = () => {
  const [text, setText] = useState("")
  const [msg,setMsg] = useState("")

  const handleInputChange = (event:any) => {
    setText(event?.target.value)
  }
  const handleEnterClick = (event:any) => {
    if (event.key =="Enter") {
      alert(`Your search Text is: `+ text)
      setMsg("Yay!!! word matched....")
    }
  }
  return (
    <Wrapper>
      <TopBar />
      <MiddleSection>
          <Box />
          <div className="scorebox">
            <ScoreBox />
          </div>
      </MiddleSection>
      <TextInput handleInputChange={handleInputChange} handleEnterClick={handleEnterClick} message={msg}/>
      <BottomBar />
    </Wrapper>
  )
}

export default Home
