import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

type ParagraphFactoryProps = {
  data: {
    text?: string;
  };
};

export const ParagraphFactory: BlockFactory = (
  block: ParagraphFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const html = sanitizeHtml(block?.data?.text || "", sanitizeHtmlOptions);
  if (!html) return null;

  return <p className={BlockClassFactory.create(block)}>{html}</p>;
};
