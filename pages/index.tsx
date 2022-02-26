/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin:0 auto;
  width:70%;
  text-align: center;
  height:100vh;

  .logo{

  }

  .text{
    width:70%;
    font-size:26px; 

    & p {
      text-align:left;
      font-size:21px;
    }
  }

  .start-btn{
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 4.5rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    vertical-align: baseline;
    width: 300px;

    &:hover{
        cursor: pointer;
        transform:scale(1.1);
        transition: all .3s ease-out;
    }
  }
`;

const Home: NextPage = () => {
  const router  = useRouter()
  const id = 211
  const handleStartGame = () => { 
    router.push(`/game/${id}`)
   }
  return (
    <Wrapper>
      <div className="logo">
        <img src="/assets/icons/boggle.png" width="400" height="100" alt="boogle-logo" />
      </div>
      <div className="text">
        <h2>Welcome to Boggle !!!</h2>
        <p>Boggle is a word game invented by Allan Turoff and originally distributed by Parker Brothers. The game is played using a grid of letters, in which the players attempt to find words in sequences of adjacent letters.
          Basically, The player searches for words that can be constructed from the letters of sequentially adjacent cubes, where adjacent cubes are those horizontally, vertically and diagonally neighboring. Words must be at least three letters long, may include singular and plural (or other derived forms) separately. The application records all the words that is submitted by the players. After three minutes have elapsed, the application stops the player from the game play and the game enters the scoring phase.</p>
      </div>
      <div className="start-btn" onClick={handleStartGame}>
        Start Game
      </div>
    </Wrapper>
  )
}

export default Home
