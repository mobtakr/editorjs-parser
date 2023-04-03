import React from "react";
import {removeTags} from "../../helpers";

type ImageFactoryProps = {
    data: {
        caption?: string;
        file: {
            url: string;
        };
        stretched: boolean;
        withBackground: boolean;
        withBorder: boolean;
    };
};

export const imageFactory = (block: ImageFactoryProps) => {
    const imageLink = removeTags(block?.data?.file?.url);
    const caption = block?.data?.caption ? removeTags(block?.data?.caption) : undefined;
    const classList = [];
    if (block?.data?.stretched) classList.push("image-stretched");
    if (block?.data?.withBackground) classList.push("image-with-background");
    if (block?.data?.withBorder) classList.push("image-bordered");
    if (!imageLink) {
        return null;
    }
    return (
        <React.Fragment>
            <figure className={classList.join(" ")}>
                <img alt="image" src={imageLink}/>
                {caption && <figcaption>{caption}</figcaption>}
            </figure>
        </React.Fragment>
    );
};
