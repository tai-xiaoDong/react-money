import styled from "styled-components";
import React, { useState } from 'react';


const Wrapper = styled.section`
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
const NoteSection: React.FC = () => {
    const [note, setNote] = useState('');
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="请在这里添加备注"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                //e表示这个事件，target表示用户操作的元素，这里指input，value是input的值，保存到了note中
                />
            </label>
        </Wrapper>
    )
}

export default NoteSection;