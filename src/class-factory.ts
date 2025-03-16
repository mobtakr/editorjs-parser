import { EditorBlock } from "./content";

export class BlockClassFactory {
    static create(block: EditorBlock) {
        const classList = ["editorjs-block block"];
        if (block?.type) classList.push(`block-${block?.type}`.toLowerCase());
        classList.push(block?.type);

        return classList.join(" ");
    }
}
