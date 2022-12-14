import { ReactNode } from "react";
import IBlock from "./Blocks";
import {
  imageMapFunc,
  listMapFunc,
  paragraphMapFunc,
  titleMapFunc,
} from "./MappingFunctions";

class EditorParser {
  private blockMapping: any = {
    header: titleMapFunc,
    image: imageMapFunc,
    paragraph: paragraphMapFunc,
    list: listMapFunc,
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
