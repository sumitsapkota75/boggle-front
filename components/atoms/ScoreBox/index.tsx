import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 300px;
    border-radius: 5px;
    border: solid 1px #EEEEEE;
    float: right;
    margin: 15px;
    padding: 10px;

    .word-list{
        display: flex;
        width: 100%;
        height: 200px;
        max-height: 200px;
        overflow-y: auto;
        padding-bottom:10px;
        border-bottom: solid 1px #EEEEEE;

        & h2{
            border-bottom: solid 1px #EEEEEE;
        }
    }

    .words{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        justify-content: center
    }
    .score{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        justify-content: center
    }
    .total{
        margin-top:20px;
        font-size:21px;
    }

   
`

const ScoreBox = () => {
  return (
    <Wrapper>
        <div className="word-list">
            <div className="words">
                <h2>Words</h2>
                <p>Cat</p>
                <p>Mouse</p>
                <p>Tiger</p>
            </div>
            <div className="score">
                <h2>Score</h2>
                <p>33</p>
                <p>44</p>
                <p>55</p>
            </div>
        </div>
        <div className="total">Total Score is: 33</div>
    </Wrapper>
  )
}

export  {ScoreBox}