import { ReactNode } from "react";
import { IOptions } from "sanitize-html";
import { EditorBlock } from "../content";

export type BlockFactory = (
    block: EditorBlock,
    sanitizeHtmlOptions?: IOptions,
) => ReactNode;
