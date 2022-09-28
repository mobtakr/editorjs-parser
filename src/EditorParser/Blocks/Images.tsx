import Image from "next/image";
import React from "react";

const ImageBlock = (props: { block: any }) => {
  const block = props.block;
  const imageLink = block.data?.file?.url;
  return <Image layout="fill" alt="image" src={imageLink} />;
};

export default ImageBlock;
