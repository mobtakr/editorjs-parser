import React from "react";
import { BlockFactory } from "./factory";

type DelimiterFactoryProps = {
  data: {};
};

export const DelimiterFactory: BlockFactory = (
  _block: DelimiterFactoryProps
) => {
  return (
    <React.Fragment>
      <div className="delimiter"></div>
    </React.Fragment>
  );
};
