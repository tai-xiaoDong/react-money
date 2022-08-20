import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NmberPadSection";
import NoteSection from "./Money/NoteSection";
import TagsSection from "./Money/TagsSection";


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;


const Money = () => {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as ('-' | '+'),
        amount: 0
    })
    return (
        <MyLayout className="hi">
            <TagsSection
                value={selected.tags}
                onChange={(tags) => setSelected({ ...selected, tags: tags })}
            />
            <NoteSection
                value={selected.note}
                onChange={(note) => setSelected({ ...selected, note: note })}
            />
            <CategorySection
                value={selected.category}
                onChange={(category) => { setSelected({ ...selected, category: category }) }}
            />
            <NumberPadSection
                value={selected.amount}
                onChange={(amount) => { setSelected({ ...selected, amount: amount }) }}
                onOk={() => { }}
            />
        </MyLayout>)
}

export default Money;