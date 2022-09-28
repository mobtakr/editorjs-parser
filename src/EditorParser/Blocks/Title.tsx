import React from "react";
const TitleBlock = (props: { block: any }) => {
  const block = props.block;
  const text = block.data?.text;
  return <h2>{text}</h2>;
};

export default TitleBlock;
