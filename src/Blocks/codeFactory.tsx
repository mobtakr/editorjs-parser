import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

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
  if (!html) return null;

  return (
    <pre>
      <code className={BlockClassFactory.create(block)}> {html} </code>
    </pre>
  );
};
