const removeTags = (str: string) => {
    if (!str) {
        return null;
    }
    return str
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim();
};

export {removeTags};
