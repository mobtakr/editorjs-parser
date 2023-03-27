import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const listBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema(
      {
        items: {
          type: Array,
          required: false,
          max: 128,
        },
        "items.$": {
          type: String,
          required: false,
          max: 8192,
        },
        style: {
          type: String,
          required: false,
          max: 255,
        },
      },
      options
    ),
  }, options);