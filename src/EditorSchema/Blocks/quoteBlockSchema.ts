import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchema } from "./baseBlockSchemaOptions";

export const quoteBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchema(),
    data: new SimpleSchema({
      alignment: {
        type: String,
        required: false,
        max: 255,
      },
      caption: {
        type: String,
        required: false,
        max: 255,
      },
      text: {
        type: String,
        required: false,
        max: 16384,
      },
    }, options),
  }, options);