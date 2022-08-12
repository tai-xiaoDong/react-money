import Layout from "components/Layout";
import styled from "styled-components";

const TagsSection = styled.section`
    background:#ffffff;
    padding:0 16px;
    >ol{
        margin:0 -12px;
        >li{
            background:#D9D9D9;
            border-radius : 18px;
            display:inline-block;
            padding:3px 18px; 
            font-size:14px;
            margin:8px 12px;
        }
    }
    >button{
        background:none;
        border:none;
        padding:2 4px;
        border-bottom:1px solid #333; 
        color:#666;
        margin-top:8px;
    }
`
const NotesSection = styled.section`

`
const CategorySection = styled.section`

`
const NumberSection = styled.section`

`

const Money = () => {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection >
            <NotesSection>
                <span>备注</span>
                <input type="text"></input>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberSection>
                <div>
                    100
                </div>
                <div>
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
                    <button>ok</button>
                    <button>0</button>
                    <button>.</button>

                </div>
            </NumberSection>
        </Layout>)
}

export default Money;