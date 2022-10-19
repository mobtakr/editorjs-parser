const removeTags = (str: string) => {
  return str
    .replace(/<[^>]*>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
};

export { removeTags };
