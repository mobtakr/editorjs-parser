import React from "react";
import { removeTags } from "../../helpers";
const ListBlock = (props: { block: any }) => {
  const block = props.block;
  const items: string[] = block?.data?.items;
  return (
    <ul>
      {items?.map((item) => (
        <li key={item}> {removeTags(item)}</li>
      ))}
    </ul>
  );
};

export default ListBlock;
