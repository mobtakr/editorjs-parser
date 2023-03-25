import { removeTags } from "../../helpers";

export type HeaderFactoryProps = {
  data: {
    level: number;
    text: string;
  }
}

const createComponent = (level: number, text: string) => {
  const components = [<h1 />, <h2 />, <h3 />, <h4 />, <h5 />, <h6 />];
  const Component = components[level ? level - 1 : 0];
  Component.props.children = text;
  return Component;
};

export const headerFactory = (props: { block: HeaderFactoryProps }) => {
  const block = props.block;
  const text = removeTags(block?.data?.text);
  if (!text) {
    return null;
  }
  return createComponent(block?.data?.level, text);
};