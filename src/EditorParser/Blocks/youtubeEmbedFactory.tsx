import { removeTags } from "../../helpers";

type YoutubeEmbedBlockProps = {
  data: {
    url: string;
  };
};

export const youtubeEmbedFactory = (props: { block: YoutubeEmbedBlockProps }) => {
  const block = props.block;
  const url = removeTags(block?.data?.url);
  if (!url) {
    return null;
  }
  return <iframe src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>;
};