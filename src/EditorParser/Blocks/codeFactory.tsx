import React from "react";
import sanitizeHtml, {IOptions} from "sanitize-html";
import parse from "html-react-parser";

type CodeFactoryProps = {
    data: {
        code: string;
    };
};

export const codeFactory = (
    block: CodeFactoryProps,
    sanitizeHtmlOptions: IOptions
) => {
    const html = sanitizeHtml(block?.data?.code, sanitizeHtmlOptions);
    if (!html) {
        return null;
    }
    return <React.Fragment>{parse(html)}</React.Fragment>;
};
