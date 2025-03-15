import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";

type QuoteFactoryProps = {
  data: {
    text: string;
    alignment: "left" | "center" | "right";
    caption: string;
  };
};

export const quoteFactory = (
  block: QuoteFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const text = sanitizeHtml(block?.data?.text, sanitizeHtmlOptions);
  const caption = sanitizeHtml(block?.data?.caption, sanitizeHtmlOptions);
  if (!text) {
    return null;
  }
  return (
    <React.Fragment>
      <p>
        <figure>
          <blockquote>{text}</blockquote>
          <figcaption>{caption}</figcaption>
        </figure>
      </p>
    </React.Fragment>
  );
};
