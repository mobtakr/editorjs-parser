import React from "react";

type DelimiterFactoryProps = {
    data: {};
};

export const delimiterFactory = (_block: DelimiterFactoryProps) => {
    return (
        <React.Fragment>
            <div className="delimiter"></div>
        </React.Fragment>
    );
};
