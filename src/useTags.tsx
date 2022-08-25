/* eslint-disable */
import { useState } from "react";
import { createId } from "lib/createId";


// 这就是自定义的Hook  自定义Hook必须使用use开头  这里是操作tag的hook 

const defaultTags = [
    { id: createId(), name: '衣' }, { id: createId(), name: '食' },
    { id: createId(), name: '住' }, { id: createId(), name: '行' },
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i
                break;
            }
            return result;
        }
    };
    const updateTag = (id: number, { name }: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? { id, name: name } : tag));
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter((tag) => { tag.id !== id }));
    };

    return {
        tags,//读
        setTags,//写
        findTag,//查找tag.name
        updateTag,//更改 实际上是拷贝了一个副本进行修改
        findTagIndex,//读取下标index（id）
        deleteTag,//删除tag
    }
}



export default useTags;