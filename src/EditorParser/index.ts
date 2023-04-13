import IBlock, {
  checkListFactory,
  codeFactory,
  delimiterFactory,
  headerFactory,
  imageFactory,
  listFactory,
  paragraphFactory,
  quoteFactory,
  tableFactory,
  youtubeEmbedFactory,
} from "./Blocks";

class EditorParser {
  private blockMapping: any = {
    header: headerFactory,
    image: imageFactory,
    paragraph: paragraphFactory,
    list: listFactory,
    checklist: checkListFactory,
    code: codeFactory,
    delimiter: delimiterFactory,
    table: tableFactory,
    youtubeEmbed: youtubeEmbedFactory,
    quote: quoteFactory,
  };
  private blocks;

  constructor(blocks: any) {
    this.blocks = blocks;
  }

  registerBlock(type: string, block: any) {
    this.blockMapping[type] = block;
  }

  parse(sanitizeHtmlOptions?: Record<string, any>): IBlock[] {
    return this?.blocks?.map((block: any) => {
      if (!this?.blockMapping[block?.type]) {
        console.error(`Please provide a block for ${block?.type}`);
        return;
      }
      const blockData: IBlock = {
        id: block?.id,
        type: block?.type,
        component: this.blockMapping[block?.type](block, sanitizeHtmlOptions),
      };
      return blockData;
    });
  }
}

export { EditorParser };
