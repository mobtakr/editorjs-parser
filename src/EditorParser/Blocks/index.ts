import {ReactNode} from "react";

interface IBlock {
    id: string;
    type: string;
    component: ReactNode;
}

export {checkListFactory} from "./checkListFactory";
export {codeFactory} from "./codeFactory";
export {delimiterFactory} from "./delimiterFactory";
export {headerFactory} from "./headerFactory";
export {imageFactory} from "./imageFactory";
export {listFactory} from "./listFactory";
export {paragraphFactory} from "./paragraphFactory";
export {quoteFactory} from "./quoteFactory";
export {tableFactory} from "./tableFactory";
export {youtubeEmbedFactory} from "./youtubeEmbedFactory";

export default IBlock;