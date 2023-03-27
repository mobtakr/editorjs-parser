import React from "react";
import sanitizeHtml, {IOptions} from 'sanitize-html';
import parse from "html-react-parser";

type TableFactoryProps = {
    data: {
        content: string[][];
        withHeadings: boolean;
    };
};

export const tableFactory = (block: TableFactoryProps, sanitizeHtmlOptions: IOptions) => {
    const rows = block?.data?.content;

    const createRows = (rows: string[][]) => {
        return rows?.map((row, index) => (
            <tr>
                {row.map((col) => {
                    const html = sanitizeHtml(col, sanitizeHtmlOptions);
                    return block.data.withHeadings && index === 0 ? (
                        <th scope="col">{parse(html)}</th>
                    ) : (
                        <td>{parse(html)}</td>
                    );
                })}
            </tr>
        ));
    };

    return (
        <React.Fragment>
            <table className="table">{createRows(rows)}</table>
        </React.Fragment>
    );
};