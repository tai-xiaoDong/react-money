import Layout from "components/Layout";
import CategorySection from "./Money/CategorySection";
import { useState } from 'react';
import styled from "styled-components";
import { useRecords } from '../hooks/useRecords';
import useTags from 'hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
    background: whit;
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
        margin-left:16px 
    }
    > .tags{
        margin-left :5px;
    }
    >.amount{
        margin-right: 5px;
    }
`

const Statistics = () => {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const { records } = useRecords();
    const { getName } = useTags();
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection
                    value={category}
                    onChange={(value) => { setCategory(value) }} />
            </CategoryWrapper>
            <div>
                {records.map(r => {
                    return (<Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        <div className="date">
                            {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
                        </div>
                    </Item>)

                })}
            </div>
        </Layout>
    )
}

export default Statistics;