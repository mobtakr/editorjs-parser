import React from "react";
import { removeTags } from "../../helpers";
const TitleBlock = (props: { block: any }) => {
  const block = props.block;
  const text = removeTags(block.data?.text);
  return <h2>{text}</h2>;
};

export default TitleBlock;
