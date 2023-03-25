import { removeTags } from "../../helpers";

type QuoteFactoryProps = {
  data: {
    text: string;
    alignment: "left" | "center" | "right";
    caption: string;
  };
}

export const quoteFactory = (props: { block: QuoteFactoryProps }) => {
  const block = props.block;
  const text = removeTags(block?.data?.text);
  const caption = removeTags(block?.data?.caption);
  if (!text) {
    return null;
  }
  return (
    <p>
      <span className="quote">
        {text}
        {caption && (
          <>
            <br />
            <span className="quote-caption">{caption}</span>
          </>
        )}
      </span>
    </p>
  );
};