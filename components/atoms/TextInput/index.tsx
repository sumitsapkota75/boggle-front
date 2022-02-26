import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-size:21px;
    margin-top: 20px;
    width:100%;
    min-height:80px;
    
    .input-section{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:#F1A66A;
        width:100%;
        min-height:80px;
    }

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

const TextInput = ({handleInputChange,handleEnterClick,message}:any) => {
    
  return (
        <Wrapper>
            <div className="msg">
                {message}
            </div>
            <div className="input-section">
                <div>Enter Text: </div>
                <div>
                    <input type="text" onChange={(e)=>handleInputChange(e)} onKeyDown={handleEnterClick}/>
                </div>
                <p>Press enter to select word</p>
            </div>
        </Wrapper>
  )
}

export  {TextInput}