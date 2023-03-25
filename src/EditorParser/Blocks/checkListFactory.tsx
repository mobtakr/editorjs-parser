import { removeTags } from "../../helpers";

type CheckListFactoryProps = {
  data: {
    items: string[];
    style: "ordered" | "unordered";
  };
};

export const checkListFactory = (props: { block: CheckListFactoryProps }) => {
  const block = props.block;
  const items: string[] = block?.data?.items;

  const createList = (items: string[]) => {
    return items?.map((item) => <li key={item}>{removeTags(item)}</li>);
  };

  return props.block.data.style === "ordered" ? (
    <ol>{createList(items)}</ol>
  ) : (
    <ul>{createList(items)}</ul>
  );
};