import styled from "styled-components";
import React from 'react';


const _NotesSection = styled.section`
    background:#f5f5f5;
    padding:0px  16px;
    font-size:14px;
    >label{
        display:flex;
        align-items: center;
        >span{
            margin-right:16px;
            white-space:nowrap;
        }
        >input{
            display:block;
            width:100%;
            height:72px;
            background:none;
            border:none;
        }
    }
`;
const NotesSection: React.FC = () => {
    return (
        <_NotesSection>
            <label>
                <span>备注</span>
                <input type="text" placeholder="请在这里添加备注"></input>
            </label>
        </_NotesSection>
    )
}

export default NotesSection;