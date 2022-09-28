# Editor.js Parser and Renderer for React.js or Next.js
The package lets you render the content of Editor.js and lets you extend the functionality easily. 

## Install the package 
Run 
```
npm install --save-dev @mobtakr/editorjs-parser
```

## Editor.js Output 
[Editor.js](https://editorjs.io/) is an a great block styled editor. It lets you embed a text editor in your application. 

The output of Editor.js is a Json Object like below: 
```
{
    "time": 1664376861686,
    "blocks": [
        {
            "id": "9xynmGdBTA",
            "type": "paragraph",
            "data": {
                "text": "DGDSGHD GSGG"
            }
        },
        {
            "id": "IF6QCbnQQz",
            "type": "paragraph",
            "data": {
                "text": "cxbcxbbcxb"
            }
        },
        {
            "id": "l4frEHcq2o",
            "type": "list",
            "data": {
                "style": "ordered",
                "items": [
                    "fjhkmhg,",
                    "gdhfd",
                    "fdhfdh",
                    "fdh"
                ]
            }
        }
    ],
    "version": "2.23.2"
}
```

## How to use Editor.js Parser? 
Below is an example of how you can integrate Editor.js Parser into your React.js or Next.js application> 

First Install the package 
```
npm install --save-dev @mobtakr/editorjs-parser
```
Then create a component to render the content. 
```
import { EditorParser, EditorRenderer } from "@mobtakr/editorjs-parser";
import styles from "./PostContent.module.css";

const PostContent = (props: { content: string }) => {
  const content = JSON.parse(props.content);
  console.log(content);
  const parser = new EditorParser(content.blocks);

  const parsedBlocks = parser.parse();
  return (
    <>
      <EditorRenderer parsedBlocks={parsedBlocks} styles={styles} />{" "}
    </>
  );
};

export default PostContent;

```

In the example above you first parse the Json object then, create an instance of EditorParser and pass it `content.blocks`.

Now, you can get the parsed blocks by calling the `parse mehtod`. 

Finally pass a parsedBlocks prop and a styles object to `<EditorRenderer />` component. 

## styling and the Style Object
Each Editor.js block has a type and an id.
```
{
    "id": "9xynmGdBTA",
    "type": "paragraph",
    "data": {
        "text": "DGDSGHD GSGG"
    }
}
```
The EditorRenderer component expects a style object that contains styles for each type. 
 
For type `paragraph` you can pass a style objects like this
```
.paragraph {
    font-size: 1rem;
    margin: 10px 0;
}
```

Besides that each block has another class which is `block`. 
So you can add some shared styles to your blocks.
```
.block {
  position: relative;
  margin-block: 10px;
}
```

## Add support for additional blocks 
You can extend the functionality of this package by adding new blocks. 

The `registerBlock method` of the EditorParser class enables you to parse more blocks. 
It expects two arguments
 1. The type or the block.
 2. A function that takes the block as an arguement it returns a React component. 
 
 ### Example 
 This is a React component that takes a block as an argument and returns a paragraph. 
 
 ```
 const TextBlock = (props: { block: any }) => {
  const block = props.block;
  const text = block.data?.text;
  return <p>{text}</p>;
};

export default TextBlock;
 ```
 Now, you can create a function that takes a block as an arguemnt and returns that component. `TextBlock`

```
export const paragraphMapFunc = (block: any) => <TextBlock block={block} />;
```
Finally, you can add this block using the `registerBlock method`.

```
const parser = new EditorParser(content.blocks);
parser.registerBlock('paragraph', paragraphMapFunc)
```
