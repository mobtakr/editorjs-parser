import { removeTags } from "../../helpers";

type TableFactoryProps = {
  data: {
    content: string[][];
    withHeadings: boolean;
  };
};

export const tableFactory = (props: { block: TableFactoryProps }) => {
  const block = props.block;
  const rows = block?.data?.content;

  const createRows = (rows: string[][]) => {
    return rows?.map((row, index) => (
      <tr>
        {row.map((col) =>
          block.data.withHeadings && index === 0 ? (
            <th>{removeTags(col)}</th>
          ) : (
            <td>{removeTags(col)}</td>
          )
        )}
      </tr>
    ));
  };

  return <table>{createRows(rows)}</table>;
};