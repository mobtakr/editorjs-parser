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
        },
        "items.$": {
          type: new SimpleSchema({
            text: {
              type: String,
              required: false,
              max: 8192,
            },
            checked: {
              type: Boolean,
              required: false,
            },
          }),
          required: false,
          max: 128,
        },
      },
      options
    ),
  }, options);