import React from "react";
import sanitizeHtml, { IOptions } from "sanitize-html";

type TableFactoryProps = {
  data: {
    content: string[][];
    withHeadings: boolean;
  };
};

export const tableFactory = (
  block: TableFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const withHeadings = block?.data.withHeadings;
  const rows = block?.data?.content || [];
  const normalRows = withHeadings ? rows.slice(1) : rows;
  const headingRows = withHeadings ? rows.slice(0, 1) : rows;

  return (
    <React.Fragment>
      <table className="table">
        {headingRows.map((row) => (
          <tr key={row.join("")}>
            {row.map((col) => (
              <th>{sanitizeHtml(col, sanitizeHtmlOptions)}</th>
            ))}
          </tr>
        ))}
        {normalRows.map((row) => (
          <tr key={row.join("")}>
            {row.map((col) => (
              <td>{sanitizeHtml(col, sanitizeHtmlOptions)}</td>
            ))}
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};
