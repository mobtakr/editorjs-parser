import React, { useMemo } from "react";
import { removeTags } from "../../helpers";
const TextBlock = (props: { block: any }) => {
  const block = props.block;
  const text = useMemo(() => {
    return removeTags(block?.data?.text);
  }, [block]);

  if (!text) {
    return null;
  }
  return <p>{text}</p>;
};

export default TextBlock;
