import { useState, useEffect } from 'react';
import { useUpdate } from 'hooks/useUpdate';

export type RecordItem = {
    tagIds: number[];
    note: string;
    category: '+' | '-';
    amount: number;
    createdAt: string;
};
type newRecordItem = Omit<RecordItem, 'createdAt'>;

export const useRecords = () => {
    //初始值为空数组，实际保存着所有的数据
    const [records, setRecords] = useState<RecordItem[]>([]);
    //页面更新后读取一次localStorage中的数据
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])
    // 更新localStorage 中报保存的数据
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])
    //添加新的record
    const addRecord = (newRecord: newRecordItem) => {
        const record = { ...newRecord, createdAt: (new Date()).toISOString() }
        setRecords([...records, record])
    };


    return { records, addRecord }
};