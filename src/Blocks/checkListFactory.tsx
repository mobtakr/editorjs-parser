import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

type CheckListFactoryProps = {
  data: {
    items?: string[];
    style?: string | "ordered" | "unordered";
  };
};

export const CheckListFactory: BlockFactory = (
  block: CheckListFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const items: string[] = block?.data?.items || [];
  const createList = (items: string[]) => {
    return items?.map((item) => {
      const html = sanitizeHtml(item, sanitizeHtmlOptions);
      return <li key={item}>{html}</li>;
    });
  };

  return (
    <React.Fragment>
      {block.data.style === "ordered" ? (
        <ol className={BlockClassFactory.create(block)}>{createList(items)}</ol>
      ) : (
        <ul className={BlockClassFactory.create(block)}>{createList(items)}</ul>
      )}
    </React.Fragment>
  );
};
