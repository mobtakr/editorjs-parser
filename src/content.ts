export enum EditorBlockType {
    header = "header",
    image = "image",
    paragraph = "paragraph",
    list = "list",
    checklist = "checklist",
    code = "code",
    delimiter = "delimiter",
    table = "table",
    youtubeEmbed = "youtubeEmbed",
    quote = "quote",
}

export interface EditorBlock {
    id: string;
    type: string;
    data: EditorData & Record<string, unknown>;
}

export interface EditorData {
    text?: string;
    style?: string;
    items?: string[];
    level?: number;
    code?: string;
    caption?: string;
    file?: {
        url?: string;
    };
    stretched?: boolean;
    withBackground?: boolean;
    withBorder?: boolean;
    content?: string[][];
    url?: string;
    withHeadings?: boolean;
}
