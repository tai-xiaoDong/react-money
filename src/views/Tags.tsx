import Layout from "components/Layout";
import { useState } from 'react';
import useTags from '../useTags';


const Tags = () => {
    const { tags, setTags } = useTags()
    return (
        <Layout children='标签页面'></Layout>
    )
}

export default Tags;