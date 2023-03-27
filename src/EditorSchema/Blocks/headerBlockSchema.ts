import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchema } from "./baseBlockSchemaOptions";

export const headerBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchema(),
    data: new SimpleSchema(
      {
        level: {
          type: Number,
          required: false,
          min: 1,
          max: 6,
        },
        text: {
          type: String,
          required: false,
          max: 16384,
        },
      },
      options
    ),
  }, options);