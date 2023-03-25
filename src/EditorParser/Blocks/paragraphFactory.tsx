import React from "react";
import sanitizeHtml, {IOptions} from 'sanitize-html';
import parse from "html-react-parser";

type ParagraphFactoryProps = {
  data: {
    text: string;
  };
};

export const paragraphFactory = (block: ParagraphFactoryProps, sanitizeHtmlOptions:IOptions) => {
  const html = sanitizeHtml(block?.data?.text, sanitizeHtmlOptions);
  if (!html) {
    return null;
  }
  return (
    <React.Fragment>
      <p>{parse(html)}</p>
    </React.Fragment>
  );
};
