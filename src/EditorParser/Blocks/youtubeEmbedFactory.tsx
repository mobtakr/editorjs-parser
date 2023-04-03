import React from "react";
import {removeTags} from "../../helpers";

type YoutubeEmbedBlockProps = {
    data: {
        url: string;
    };
};

const getIdFromUrl = (url: string) => {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = url.match(regex);
    return match && match[1];
}

export const youtubeEmbedFactory = (block: YoutubeEmbedBlockProps) => {
    const url = removeTags(block?.data?.url);
    if (!url) return null;
    const youtubeId = getIdFromUrl(url);
    if (!youtubeId) return null;

    return (
        <React.Fragment>
            <iframe
                src={"https://www.youtube.com/embed/" + youtubeId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </React.Fragment>
    );
};