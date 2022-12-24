import React, { useMemo } from "react";
import { removeTags } from "../../helpers";
const TitleBlock = (props: { block: any }) => {
  const block = props.block;

  const text = useMemo(() => {
    return removeTags(block?.data?.text);
  }, [block]);

  if (!text) {
    return null;
  }

  return <h2>{text}</h2>;
};

export default TitleBlock;
