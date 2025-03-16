import React from "react";
import { removeTags } from "../helpers";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

export type HeaderFactoryProps = {
  data: {
    level?: number;
    text?: string;
  };
};

const createComponent = (block: HeaderFactoryProps) => {
  const text = removeTags(block?.data?.text || "");
  const level = block?.data?.level || 1;
  switch (level) {
    case 1:
      return <h1 className={BlockClassFactory.create(block)}>{text}</h1>;
    case 2:
      return <h2 className={BlockClassFactory.create(block)}>{text}</h2>;
    case 3:
      return <h3 className={BlockClassFactory.create(block)}>{text}</h3>;
    case 4:
      return <h4 className={BlockClassFactory.create(block)}>{text}</h4>;
    case 5:
      return <h5 className={BlockClassFactory.create(block)}>{text}</h5>;
    case 6:
      return <h6 className={BlockClassFactory.create(block)}>{text}</h6>;
    default:
      return null;
  }
};

export const HeaderFactory: BlockFactory = (block: HeaderFactoryProps) => {
  const text = removeTags(block?.data?.text || "");
  if (!text) return null;

  return <React.Fragment>{createComponent(block)}</React.Fragment>;
};
