import React from "react";
import {removeTags} from "../../helpers";

export type HeaderFactoryProps = {
    data: {
        level: number;
        text: string;
    }
}

const createComponent = (level: number, text: string) => {
    switch (level) {
        case 1:
            return <h1>{text}</h1>;
        case 2:
            return <h2>{text}</h2>;
        case 3:
            return <h3>{text}</h3>;
        case 4:
            return <h4>{text}</h4>;
        case 5:
            return <h5>{text}</h5>;
        case 6:
            return <h6>{text}</h6>;
        default:
            return null;
    }
};

export const headerFactory = (block: HeaderFactoryProps) => {
    const text = removeTags(block?.data?.text);
    if (!text) {
        return null;
    }
    return (
        <React.Fragment>{createComponent(block?.data?.level, text)}</React.Fragment>
    );
};