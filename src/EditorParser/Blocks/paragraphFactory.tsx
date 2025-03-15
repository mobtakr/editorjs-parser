import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";

type ParagraphFactoryProps = {
  data: {
    text: string;
  };
};

export const paragraphFactory = (
  block: ParagraphFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const html = sanitizeHtml(block?.data?.text, sanitizeHtmlOptions);
  if (!html) {
    return null;
  }
  return (
    <React.Fragment>
      <p>{html}</p>
    </React.Fragment>
  );
};
