import { removeTags } from "../../helpers";

type CodeFactoryProps = {
  data: {
    code: string;
  };
};

export const codeFactory = (props: { block: CodeFactoryProps }) => {
  const block = props.block;
  const code = removeTags(block?.data?.code);
  if (!code) {
    return null;
  }
  return <>{code}</>;
};
