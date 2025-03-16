# Editor.js Parser and Renderer for React.js or Next.js

The package lets you render the content of Editor.js and lets you extend the functionality easily.

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
npm install @mobtakr/editorjs-parser
```

**Then create a component to render the content**

```
import { EditorContent } from "@mobtakr/editorjs-parser";

export const PostContent = (props: { content: string }) => {
  const content = JSON.parse(props.content);
  const blocks = content.blocks;

  return (<EditorContent blocks={blocks} sanitizeHtmlOptions={} />);
};

```

In the example above you first, parse the JSON object

Finally, pass a blocks prop `<EditorContent />` component.

Optional you can pass sanitizeHtmlOptions, See https://www.npmjs.com/package/sanitize-html

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

For type `paragraph` you can style it like this

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

You can extend the functionality or override a default block by passing the block as a prop to EditorContent.

For each block, you can pass a prob where the key is the type of the block and the value is a function that accepts 

1.  The block data.
2.  An optional sanitize html option.

and returns ReactNode or JSX.

### Example

```
import { EditorContent, BlockFactory } from "@mobtakr/editorjs-parser";

type ParagraphFactoryProps = {
  data: {
    text?: string;
  };
};

export const ParagraphFactory: BlockFactory = (
  block: ParagraphFactoryProps,
  sanitizeHtmlOptions?: IOptions
) => {
  const html = sanitizeHtml(block?.data?.text || "", sanitizeHtmlOptions);
  if (!html) return null;

  return (
    <React.Fragment>
      <p>{html}</p>
    </React.Fragment>
  );
};


export const PostContent = (props: { content: string }) => {
  const content = JSON.parse(props.content);
  const blocks = content.blocks;

  return (<EditorContent blocks={blocks} sanitizeHtmlOptions={} paragraph={ParagraphFactory}/>);
};


```
