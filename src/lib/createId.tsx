let id = 0;
const createId = () => {
    return id += 1;
};

export { createId };