import styled from "styled-components";
import React, { ChangeEventHandler } from 'react';
import { Input } from "components/Input";


const Wrapper = styled.section`
    background:#f5f5f5;
    padding:8px 16px;
    font-size:14px;  ;
`;
type Props = {
    value: string;
    onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
        //e表示这个事件，target表示用户操作的元素，这里指input，value是input的值，保存到了note中
    };
    return (
        <Wrapper>
            <Input label="备注" type="text" value={note} onChange={() => onChange}
                placeholder="请在此处输入备注"
            />
        </Wrapper>
    )
}
//备注的输入框功能 受控组件

export default NoteSection;