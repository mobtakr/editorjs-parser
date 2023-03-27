import React from "react";
import sanitizeHtml, {IOptions} from 'sanitize-html';
import parse from "html-react-parser";

type ListBlockProps = {
    data: {
        items: string[];
        style: "ordered" | "unordered";
    };
};

export const listFactory = (block: ListBlockProps, sanitizeHtmlOptions: IOptions) => {
    const items: string[] = block?.data?.items;

    const createList = (items: string[]) => {
        return items?.map((item) => {
            const html = sanitizeHtml(item, sanitizeHtmlOptions);
            return <li key={item}>{parse(html)}</li>
        });
    };

    return (
        <React.Fragment>
            {block.data.style === "ordered" ? (
                <ol>{createList(items)}</ol>
            ) : (
                <ul>{createList(items)}</ul>
            )}
        </React.Fragment>
    );
};
