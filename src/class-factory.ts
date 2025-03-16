import { EditorBlock } from "./content";

export class BlockClassFactory {
    static create(block: Partial<EditorBlock>) {
        const classList = ["block", block?.type].filter(Boolean);

        return classList.join(" ");
    }
}
