import Block from "../EditorParser/Blocks";
import React from "react";
const EditorRenderer = (props: EditorRendererProps) => {
  const parsedBlocks: Block[] = props.parsedBlocks;
  const styles = props.styles;
  return (
    <>
      {parsedBlocks.map((block: Block) => (
        <div
          className={`${styles?.block} ${styles[block.type]}`}
          key={block.id}
        >
          {block.component}
        </div>
      ))}
    </>
  );
};
type EditorRendererProps = {
  styles: any;
  parsedBlocks: Block[];
};

export { EditorRenderer };
