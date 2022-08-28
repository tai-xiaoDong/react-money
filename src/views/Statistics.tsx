/* eslint-disable */
import Layout from "components/Layout";
import CategorySection from "./Money/CategorySection";
import { useState } from 'react';
import styled from "styled-components";
import { useRecords, RecordItem } from '../hooks/useRecords';
import useTags from 'hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
    background:  white;
    margin-bottom: 5px;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid  grey;
    border-top: 1px solid  grey;
    font-size: 16px;
    padding: 16px 0;
    background: white;
    margin-right: auto;
    > .note{
        margin-right: auto;
        margin-left:16px ;
        color: #b6b4b4;
    }
    > .tags{
        margin-left :5px;
    }
    >.amount{
        margin-right: 5px;
    }
`
const Date = styled.div` 
    border-bottom: 1px solid  grey;
    border-top: 1px solid  grey;
    background: grey ;
    color: white;
    
    padding: 0 10px;     
`

const Statistics = () => {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const { records } = useRecords();
    const { getName } = useTags();
    const hash: { [k: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category)
    selectedRecords.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => { setCategory(value) }} />
            </CategoryWrapper>
            {array.map(([date, records]) => <div>
                <Date><h3>{date}</h3></Date>
                <div>
                    {records.map(r => {
                        return (<div>
                            <Item>
                                <div className="tags">
                                    {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                                </div>
                                {r.note && <div className="note">
                                    {r.note}
                                </div>}
                                <div className="amount">
                                    ￥{r.amount}
                                </div>

                            </Item>
                        </div>)
                    })}
                </div>
            </div>)}
            <div>

            </div>
        </Layout>
    )
}

export default Statistics;