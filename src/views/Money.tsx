import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NmberPadSection";
import NoteSection from "./Money/NoteSection";
import TagsSection from "./Money/TagsSection";
import { useRecords } from '../hooks/useRecords';


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;
//money页面保存着所有数据数据 
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0
}
const Money = () => {
    const [selected, setSelected] = useState(defaultFormData);
    const { records, addRecord } = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({ ...selected, ...obj })
    }
    const submit = () => {
        addRecord(selected);
        alert('保存成功');
        setSelected(defaultFormData);
    }
    return (
        <MyLayout className="hi">
            <TagsSection
                value={selected.tagIds}
                onChange={(tagIds) => onChange({ tagIds })}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => onChange({ note })}
            />
            <CategorySection
                value={selected.category}
                onChange={(category) => { onChange({ category }) }}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => { onChange({ amount }) }}
                onOk={submit}
            />
        </MyLayout>)

}

export default Money;