import React, { ReactNode } from "react";
import { EditorBlock, EditorBlockType } from "./content";
import { QuoteFactory } from "./Blocks/quoteFactory";
import { YoutubeEmbedFactory } from "./Blocks/youtubeEmbedFactory";
import { TableFactory } from "./Blocks/tableFactory";
import { DelimiterFactory } from "./Blocks/delimiterFactory";
import { CodeFactory } from "./Blocks/codeFactory";
import { CheckListFactory } from "./Blocks/checkListFactory";
import { ListFactory } from "./Blocks/listFactory";
import { ParagraphFactory } from "./Blocks/paragraphFactory";
import { ImageFactory } from "./Blocks/imageFactory";
import { HeaderFactory } from "./Blocks/headerFactory";
import { BlockFactory } from "./Blocks/factory";
import { IOptions } from "sanitize-html";

const BLOCK_MAPPING: Record<EditorBlockType, BlockFactory> = {
  header: HeaderFactory,
  image: ImageFactory,
  paragraph: ParagraphFactory,
  list: ListFactory,
  checklist: CheckListFactory,
  code: CodeFactory,
  delimiter: DelimiterFactory,
  table: TableFactory,
  youtubeEmbed: YoutubeEmbedFactory,
  quote: QuoteFactory,
};

type Props = {
  block: EditorBlock;
  children?: ReactNode;
  sanitizeHtmlOptions?: IOptions;
} & Partial<Record<EditorBlockType, BlockFactory>>;

export const EditorBlockContent = (props: Props) => {
  const type = (props.block.type ?? "") as EditorBlockType;
  const block: BlockFactory | undefined = props[type] || BLOCK_MAPPING[type];
  if (!block) throw new Error(`Please provide a block for ${type}`);

  return (
    <React.Fragment>
      {block(props.block, props.sanitizeHtmlOptions)}
    </React.Fragment>
  );
};
