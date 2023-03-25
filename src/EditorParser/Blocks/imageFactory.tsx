type ImageFactoryProps = {
  data: {
    file: {
      url: string;
    };
  };
};

export const imageFactory = (props: { block: ImageFactoryProps }) => {
  const block = props.block;
  const imageLink = block?.data?.file?.url;
  if (!imageLink) {
    return null;
  }
  return <img alt="image" src={imageLink} />;
};
