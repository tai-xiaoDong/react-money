import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;

    });
    //在tags发生变化时候，将新tag保存到localStorage中,保存的必须是不可变数据
    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, [deps]);
}

export { useUpdate }