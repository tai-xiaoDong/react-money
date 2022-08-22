import { useState } from "react";
// 这就是自定义的Hook 

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    return {
        tags,
        setTags
    }
}



export default useTags;