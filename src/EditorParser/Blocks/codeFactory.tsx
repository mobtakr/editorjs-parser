import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";

type CodeFactoryProps = {
  data: {
    code: string;
  };
};

export const codeFactory = (
  block: CodeFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const html = sanitizeHtml(block?.data?.code, sanitizeHtmlOptions);
  if (!html) {
    return null;
  }
  return <React.Fragment>{html}</React.Fragment>;
};
