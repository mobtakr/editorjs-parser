import React from "react";
const ListBlock = (props: { block: any }) => {
  const block = props.block;
  const items: string[] = block?.data?.items;
  return (
    <ul>
      {items?.map((item) => (
        <li key={item}> {item}</li>
      ))}
    </ul>
  );
};

export default ListBlock;
