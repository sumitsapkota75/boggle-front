import Countdown from 'antd/lib/statistic/Countdown'
import moment, { min } from 'moment'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:21px;
    height:80px;
    width:100px;
    color: green;

    & .title{
        display:inline-block;
        margin-left:9px;
    }

`

const Timer = () => {
    const deadline = Date.now() + 60 * 60 * 24 * 1 + 1000 * 35;
    const onFinish = () => { 
        alert("Time is Finished")
     }
    return (
        <Wrapper>
            <div>Elapsed:{" "} </div>
            <div className="title">
                <Countdown  format="HH:mm:ss"  value={deadline} onFinish={onFinish} />
            </div>
        </Wrapper>
    )
}

export  {Timer}