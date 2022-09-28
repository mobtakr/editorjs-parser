import React from "react";

const ImageBlock = (props: { block: any }) => {
  const block = props.block;
  const imageLink = block.data?.file?.url;
  return <img alt="image" src={imageLink} />;
};

export default ImageBlock;
