import React from "react";
import { removeTags } from "../../helpers";
const TextBlock = (props: { block: any }) => {
  const block = props.block;
  const text = removeTags(block.data?.text);
  return <p>{text}</p>;
};

export default TextBlock;
