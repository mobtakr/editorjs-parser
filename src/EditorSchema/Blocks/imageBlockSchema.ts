import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchema } from "./baseBlockSchemaOptions";

export const imageBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchema(),
    data: new SimpleSchema(
      {
        caption: {
          type: String,
          required: false,
          max: 255,
        },
        stretched: {
          type: Boolean,
          required: false,
        },
        withBackground: {
          type: Boolean,
          required: false,
        },
        withBorder: {
          type: Boolean,
          required: false,
        },
        file: {
          required: false,
          type: new SimpleSchema(
            {
              url: {
                type: String,
                required: false,
                max: 255,
              },
              success: {
                type: Number,
                required: false,
              },
            },
            options
          ),
        },
      },
      options
    ),
  }, options);