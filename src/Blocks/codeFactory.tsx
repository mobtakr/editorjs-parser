import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";
import { BlockFactory } from "./factory";

type CodeFactoryProps = {
  data: {
    code?: string;
  };
};

export const CodeFactory: BlockFactory = (
  block: CodeFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const html = sanitizeHtml(block?.data?.code || "", sanitizeHtmlOptions);
  if (!html) {
    return null;
  }
  return <React.Fragment>{html}</React.Fragment>;
};
