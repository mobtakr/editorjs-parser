import React from "react";

type DelimiterFactoryProps = {
  data: {};
};

export const delimiterFactory = (block: DelimiterFactoryProps) => {
  return (
    <React.Fragment>
      <div className="delimiter"></div>
    </React.Fragment>
  );
};
