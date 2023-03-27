import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchema } from "./baseBlockSchemaOptions";

export const youtubeEmbedBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema(
    {
      ...baseBlockSchema(),
      data: new SimpleSchema(
        {
          url: {
            type: String,
            required: false,
            max: 255,
          },
        },
        options
      ),
    },
    options
  );