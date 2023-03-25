type DelimiterFactoryProps = {
  data: {};
};

export const delimiterFactory = (props: { block: DelimiterFactoryProps }) => {
  const block = props.block;
  return <div className="delimiter"></div>;
};
