# Editor.js Parser and Renderer for React.js or Next.js

The package lets you render the content of Editor.js and lets you extend the functionality easily. 

Thanks @klaucode for the enhancements and the additions of new blocks. 


## Install the package

Run

```
npm install @mobtakr/editorjs-parser
```

## Editor.js Output

[Editor.js](https://editorjs.io/) is a great block-styled editor. It lets you embed a text editor in your application.

The output of Editor.js is a JSON Object like below:

```
{
    "time": 1664376861686,
    "blocks": [
        {
            "id": "9xynmGdBTA",
            "type": "paragraph",
            "data": {
                "text": "I am a text generated from Editor.js"
            }
        },
        {
            "id": "IF6QCbnQQz",
            "type": "paragraph",
            "data": {
                "text": "I am a text generated from Editor.js"
            }
        },
        {
            "id": "l4frEHcq2o",
            "type": "list",
            "data": {
                "style": "ordered",
                "items": [
                    "I am item one,",
                    "and I am two",
                    "three ",
                    "four"
                ]
            }
        }
    ],
    "version": "2.23.2"
}
```

## How to use Editor.js parser?

Below is an example of how you can integrate Editor.js Parser into your React.js or Next.js application.

**First install the npm package**

```
npm install @klaucode/editorjs-parser
```

**Then create a component to render the content**

```
import { EditorParser, EditorRenderer } from "@klaucode/editorjs-parser";
import styles from "./PostContent.module.css";

const PostContent = (props: { content: string }) => {
  const content = JSON.parse(props.content);
  const parser = new EditorParser(content.blocks);

  const parsedBlocks = parser.parse();
  return (
    <>
      <EditorRenderer parsedBlocks={parsedBlocks} styles={styles} />
    </>
  );
};

export default PostContent;

```

In the example above you first, parse the JSON object then, create an instance of EditorParser and pass it `content.blocks`.

Now, you can get the parsed blocks by calling the `parse method`.

Finally, pass a parsedBlocks prop and a styles object to `<EditorRenderer />` component.

## Styling and the Style Object

Each Editor.js block has a type and an id.

```
{
    "id": "9xynmGdBTA",
    "type": "paragraph",
    "data": {
        "text": "I am a text generated from Editor.js"
    }
}
```

The EditorRenderer component expects a style object that contains styles for each type.

For type `paragraph` you can pass a style object like this

```
.paragraph {
    font-size: 1rem;
    margin: 10px 0;
}
```

Besides that, each block has another class which is `block`.
So you can add some shared styles to your blocks.

```
.block {
  position: relative;
  margin-block: 10px;
}
```

## Supported blocks
**Package currently supports following blocks:**
✅ [editorjs/checklist](https://www.npmjs.com/package/@editorjs/checklist) (official)
✅ [editorjs/code](https://www.npmjs.com/package/@editorjs/code) (official)
✅ [editorjs/header](https://www.npmjs.com/package/@editorjs/header) (official)
✅ [editorjs/image](https://www.npmjs.com/package/@editorjs/image) (official)
✅ [editorjs/list](https://www.npmjs.com/package/@editorjs/list) (official)
✅ [editorjs/paragraph](https://www.npmjs.com/package/@editorjs/paragraph) (official)
✅ [editorjs/quote](https://www.npmjs.com/package/@editorjs/quote) (official)
✅ [editorjs/table](https://www.npmjs.com/package/@editorjs/table) (official)
✅ [editorjs-youtube-embed](https://www.npmjs.com/package/editorjs-youtube-embed) (unofficial)

## Add support for additional blocks

You can extend the functionality of this package by adding new blocks.

The `registerBlock method` of the EditorParser class enables you to parse more blocks.
It expects two arguments

1.  The type or the block.
2.  A function that takes the block as an argument and returns a React component.

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

Now, you can create a function that takes a block as an argument and returns that component. `TextBlock`

```
export const paragraphMapFunc = (block: any) => <TextBlock block={block} />;
```

Finally, you can add this block using the `registerBlock method`.

```
const parser = new EditorParser(content.blocks);
parser.registerBlock('paragraph', paragraphMapFunc)
```
