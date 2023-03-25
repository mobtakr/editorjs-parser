import IBlock,{ checkListFactory, codeFactory, delimiterFactory, headerFactory, imageFactory, listFactory, paragraphFactory, quoteFactory, tableFactory, youtubeEmbedFactory } from "./Blocks";

class EditorParser {
  private blockMapping: any = {
    header: headerFactory,
    image: imageFactory,
    paragraph: paragraphFactory,
    list: listFactory,
    checklist: checkListFactory,
    code: codeFactory,
    delimiterFactory: delimiterFactory
  };
  private blocks;
  constructor(blocks: any) {
    this.blocks = blocks;
  }
  registerBlock(type: string, block: any) {
    this.blockMapping[type] = block;
  }
  parse(): IBlock[] {
    return this?.blocks?.map((block: any) => {
      if (!this?.blockMapping[block?.type]) {
        throw `Please provide a block for ${block?.type}`;
      }
      const blockData: IBlock = {
        id: block?.id,
        type: block?.type,
        component: this.blockMapping[block?.type](block),
      };
      return blockData;
    });
  }
}

export { EditorParser };
