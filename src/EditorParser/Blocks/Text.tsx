import React from "react";
const TextBlock = (props: { block: any }) => {
  const block = props.block;
  const text = block.data?.text;
  return <p>{text}</p>;
};

export default TextBlock;
