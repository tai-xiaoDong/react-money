import styled from "styled-components";
import React, { useState } from 'react';
import generateOutput from './generateOutput';

const Wrapper = styled.section`
    display: flex;
    flex-direction:column;
    >.output{
        background:#ffffff;
        font-size: 36px;
        line-height:72px;
        text-align: right;
        padding: 0 16px;
        box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.4),
                    inset 0  5px 5px -5px rgba(0,0,0,0.4);
    }
     >.pad{
        > button{
            font-size: 18px;
            float:left;
            width: 25%;
            height:64px;
            border:none;
            &.ok{
                height: 128px;
                float:right;
            }
            &.zero{
                width:50%;
            }
            &:nth-child(1){
                background: #f2f2f2;
            }
            &:nth-child(2),&:nth-child(5){
                background: #e0e0e0;
            }
            &:nth-child(3),&:nth-child(6),&:nth-child(9){
                background: #d3d3d3;
            }
            &:nth-child(4),&:nth-child(7),&:nth-child(10){
                background: #c1c1c1;
            }
            &:nth-child(8),&:nth-child(11),&:nth-child(13){
                background: #b8b8b8;
            }
            &:nth-child(12){
                background: #9a9a9a;
            }
            &:nth-child(14){
                background: #a9a9a9;
            }
        }
        
    }
`;
type Props = {
    value: number;
    onChange: (value: number) => void;
    onOk?: () => void;
}

//React.FC 是 React.FunctionComponent的简写
const NumberPadSection: React.FC<Props> = (props) => {
    // const [output, _setOutput] = useState(props.value.toString());
    const output = props.value.toString();
    const setOutput = (output: string) => {
        let value
        if (output.length > 16) {
            value = parseFloat(output.slice(0, 16));
        } else if (output.length === 0) {
            value = 0;
        } else {
            value = parseFloat(output);
        }
        props.onChange(value);
    }
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if (text === null) { return; }
        if (text === 'OK') {
            if (props.onOk) { props.onOk(); }
            return;
        }
        if ("0123456789.".split('').concat(['删除', '清空']).indexOf(text) >= 0) {
            setOutput(generateOutput(text, output));
        }

    };
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button >.</button>
            </div>
        </Wrapper>
    )
}

export default NumberPadSection