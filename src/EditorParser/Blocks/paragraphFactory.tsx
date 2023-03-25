import React, { useMemo } from "react";
import { removeTags } from "../../helpers";

type ParagraphFactoryProps = {
  data: {
    text: string;
  };
};

export const paragraphFactory = (props: { block: ParagraphFactoryProps }) => {
  const block = props.block;
  const text = removeTags(block?.data?.text);
  if (!text) {
    return null;
  }
  return <p>{text}</p>;
};
