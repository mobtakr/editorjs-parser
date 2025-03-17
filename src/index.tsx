import React, { ReactNode } from "react";
import { EditorBlock, EditorBlockType } from "./content";
import { EditorBlockContent } from "./block";
import { BlockFactory } from "./Blocks/factory";
import { IOptions } from "sanitize-html";

export * from "./Blocks/factory";
export * from "./content";

type Props = {
  /**
   * Editor.js output.blocks.
   * Output Example { "time": 1550476186479,"blocks": [ ], "version": "2.8.1"}
   */
  blocks: EditorBlock[];
  sanitizeHtmlOptions?: IOptions;
} & Partial<Record<EditorBlockType, BlockFactory>>;

export const EditorContent = (props: Props): ReactNode => {
  return (
    <React.Fragment>
      {(props.blocks || []).map((block: EditorBlock) => (
        <EditorBlockContent {...props} block={block} key={block.id} />
      ))}
    </React.Fragment>
  );
};
