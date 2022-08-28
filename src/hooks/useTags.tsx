/* eslint-disable */
import { useEffect, useRef, useState } from "react";
import { createId } from "lib/createId";
import { useUpdate } from "hooks/useUpdate";


// 这就是自定义的Hook  自定义Hook必须使用use开头  这里是操作tag的hook 

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    //页面刷新后重新读取一次localStorage中保存的tags，将新值替换默认的空数组
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localStorage.length === 0) {
            localTags = [
                { id: createId(), name: '衣' }, { id: createId(), name: '食' },
                { id: createId(), name: '住' }, { id: createId(), name: '行' },
            ]
        }
        setTags(localTags);
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags])
    //在tags发生变化时候，将新tag保存到localStorage中,保存的必须是不可变数据


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
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        const tagName = window.prompt('请输入标签名');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, { id: createId(), name: tagName }])
        }
    };
    const getName = (id: number) => {
        const tag = tags.filter(tag => tag.id === id)[0];
        return tag ? tag.name : '';
    }

    return {
        tags,//读
        setTags,//写
        findTag,//查找tag.name
        updateTag,//更改 实际上是拷贝了一个副本进行修改
        findTagIndex,//读取下标index（id）
        deleteTag,//删除tag
        addTag,//新增tag
        getName,
    }
}



export default useTags;