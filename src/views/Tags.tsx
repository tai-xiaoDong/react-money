import Layout from "components/Layout";
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from "components/Icon";

const TagList = styled.ol`
    font-size: 16px;
    background: white;
    >li{
        border-bottom: 1px solid #d5d5d5 ;
        line-height: 20px;
        padding: 12px 16px 12px 0;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items : center;  
    }   
`
const Button = styled.button`
    font-size: 18px;
    border:none;
    padding: 8px 12px;
    background:#f60;
    border-radius:4px;
    color: white;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
const Space = styled.div`
    height: 16px;
`


const Tags = () => {
    const { tags } = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}>
                        <span className="oneLine">{tag} </span>
                        <Icon name="right" />
                    </li>
                )}

            </TagList>
            <Center>
                <Space></Space>
                <Button>新增标签</Button>
                <Space></Space>
            </Center>
        </Layout>
    )
}

export default Tags;