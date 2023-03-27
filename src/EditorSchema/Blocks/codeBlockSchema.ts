import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchema } from "./baseBlockSchemaOptions";

export const blockCodeSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchema(),
    data: new SimpleSchema(
      {
        code: {
          type: String,
          required: false,
          max: 16384,
        },
      },
      options
    ),
  }, options);