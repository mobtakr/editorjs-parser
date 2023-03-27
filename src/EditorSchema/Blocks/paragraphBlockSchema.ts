import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const paragraphBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema(
      {
        text: {
          type: String,
          required: false,
          max: 16384,
        },
      },
      options
    ),
  }, options);