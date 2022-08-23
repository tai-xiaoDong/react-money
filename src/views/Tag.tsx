import React from "react";
import { useParams } from "react-router-dom";
import useTags from 'useTags';
import Layout from 'components/Layout';
import Icon from "components/Icon";
import { Button } from 'components/Button';
import styled from "styled-components";
import { Input } from "components/Input";


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


const Tag: React.FC = (props) => {
    const { findTag } = useTags();
    let { id } = useParams<Params>();
    const tag = findTag(parseInt(id))
    return (
        <Layout>
            <Topbar>
                <Icon name="left"></Icon>
                <span>编辑标签</span>
                <span></span>
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="请在此处输入标签名" />
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>


        </Layout>
    )
}

export { Tag }