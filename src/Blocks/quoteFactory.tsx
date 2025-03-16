import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

type QuoteFactoryProps = {
  data: {
    text?: string;
    alignment?: "left" | "center" | "right";
    caption?: string;
  };
};

export const QuoteFactory: BlockFactory = (
  block: QuoteFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const text = sanitizeHtml(block?.data?.text || "", sanitizeHtmlOptions);
  const caption = sanitizeHtml(block?.data?.caption || "", sanitizeHtmlOptions);
  if (!text) {
    return null;
  }
  return (
    <React.Fragment>
      <p className={BlockClassFactory.create(block)}>
        <figure>
          <blockquote>{text}</blockquote>
          <figcaption>{caption}</figcaption>
        </figure>
      </p>
    </React.Fragment>
  );
};
