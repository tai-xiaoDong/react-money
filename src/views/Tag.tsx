import React from "react";
import { useParams } from "react-router-dom";
import useTags from 'useTags';
import Layout from 'components/Layout';
import Icon from "components/Icon";
import { Button } from 'components/Button';
import styled from "styled-components";
import { Input } from "components/Input";
import { Center } from 'components/Center';



type Params = {
    id: string;
}
const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 16px;
    padding: 8px ;
    background: white;
    align-items: center;
    >span{
        padding: 8px;
    }
`
const InputWrapper = styled.div`
    background: white;
    padding:0 16px;
    margin-top: 14px;
`

const Tag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags();
    let { id: idString } = useParams<Params>();
    const tag = findTag(parseInt(idString))
    if (tag) {
        return (
            <Layout>
                <Topbar>
                    <Icon name="left"></Icon>
                    <span>编辑标签</span>
                    <span />
                </Topbar>
                <InputWrapper>
                    <Input
                        label="标签名:"
                        type="text"
                        placeholder="标签名"
                        value={tag.name}
                        onChange={(e) => {
                            updateTag(tag.id, { name: e.target.value })
                        }}
                    />
                </InputWrapper>
                <Center>
                    <Button onClick={() => { deleteTag(tag.id) }}>删除标签</Button>
                </Center>
            </Layout>
        )
    } else {
        return (
            <div>标签已经删除</div>
        )
    }
}

export { Tag }