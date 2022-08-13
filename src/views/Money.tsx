import Layout from "components/Layout";
import styled from "styled-components";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NmberPadSection";
import NotesSection from "./Money/NoteSection";
import TagsSection from "./Money/TagsSection";


const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;

const Money = () => {
    return (
        <MyLayout className="hi">
            <TagsSection />
            <NotesSection />
            <CategorySection />
            <NumberPadSection />
        </MyLayout>)
}

export default Money;