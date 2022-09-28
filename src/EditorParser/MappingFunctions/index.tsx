import ImageBlock from "../Blocks/Images";
import ListBlock from "../Blocks/List";
import TextBlock from "../Blocks/Text";
import TitleBlock from "../Blocks/Title";
import React from "react";

export const titleMapFunc = (block: any) => <TitleBlock block={block} />;

export const imageMapFunc = (block: any) => <ImageBlock block={block} />;

export const paragraphMapFunc = (block: any) => <TextBlock block={block} />;
export const listMapFunc = (block: any) => <ListBlock block={block} />;
