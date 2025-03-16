import React from "react";
import { BlockFactory } from "./factory";
import { BlockClassFactory } from "../class-factory";

type DelimiterFactoryProps = {
  data: {};
};

export const DelimiterFactory: BlockFactory = (
  block: DelimiterFactoryProps
) => {
  return (
    <React.Fragment>
      <div className={BlockClassFactory.create(block)}></div>
    </React.Fragment>
  );
};
