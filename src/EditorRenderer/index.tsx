import Block from "../EditorParser/Blocks";
import React from "react";

const EditorRenderer = (props: EditorRendererProps) => {
  const parsedBlocks: Block[] = props.parsedBlocks;
  const styles = props.styles;

  if (!parsedBlocks) {
    return null;
  }
  return (
    <React.Fragment>
      {parsedBlocks?.map((block: Block) => {
        const classList = ["editorjs-block block"];
        if (block?.type) classList.push(`block-${block?.type}`.toLowerCase());
        if (styles?.block) classList.push(styles?.block);
        if (styles?.[block?.type]) classList.push(styles?.[block?.type]);

        if (block.type == "paragraph") {
          return <>{block?.component}</>;
        }

        return (
          <div className={classList.join(" ")} key={block?.id}>
            <div className="block-wrapper">{block?.component}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
type EditorRendererProps = {
  styles: any;
  parsedBlocks: Block[];
};

export { EditorRenderer };
