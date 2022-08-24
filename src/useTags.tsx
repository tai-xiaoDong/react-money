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
    }
    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        // tagsClone 是对tags的 深拷贝  
        const tagsClone = JSON.parse(JSON.stringify(tags));
        // 把 tagsClone的第index个删掉，换成 { id: id, name: obj.name }
        tagsClone.splice(index, 1, { id: id, name: obj.name })
        setTags(tagsClone);
    };
    return {
        tags,//读
        setTags,//写
        findTag,//查
        updateTag,//更新
        findTagIndex,//读取下标index
    }
}



export default useTags;