import styled from "styled-components";
import React from 'react';
import useTags from "hooks/useTags";


const Wrapper = styled.section`
    background:#ffffff;
    padding:0 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    >ol{
        margin:0 -12px;
        >li{
            background:#D9D9D9;
            border-radius : 18px;
            display:inline-block;
            padding:3px 18px; 
            font-size:14px;
            margin:8px 12px;
            &.selected {
                background: #333;
                color: white;
            }
        }
    }
    >button{
        background:none;
        border:none;
        padding:2 4px;
        border-bottom:2px solid #333; 
        color:#666;
        margin-top:8px;
        margin-bottom: 8px;;
    }
`;


type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
    const { tags, addTag } = useTags();
    const selectedTagIds = props.value;
    //选中
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            //如果tag 已被选中，就复制所有没有被选中的tag，作为新的selectedTag
            props.onChange(selectedTagIds.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTagIds, tagId])
        }
    };
    //判断当前tag是否被选中
    const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';


    return (
        <Wrapper>
            <ol>
                {tags.map((tag) =>
                    <li key={tag.id} onClick={
                        () => { onToggleTag(tag.id); }
                    } className={getClass(tag.id)} >{tag.name}</li>
                )}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </Wrapper>
    )
}


export default TagsSection;