import type { NextPage } from 'next'
import styled from 'styled-components'
import { BottomBar, Box, ScoreBox, TextInput, TopBar } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <Box />
      <ScoreBox />
      <TextInput />
      <BottomBar />
    </Wrapper>
  )
}

export default Home
