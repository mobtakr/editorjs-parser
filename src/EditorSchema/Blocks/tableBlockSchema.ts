import SimpleSchema from "simpl-schema";
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const tableBlockSchema = (
  options: SimpleSchemaOptions | undefined = undefined
) =>
  new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
      withHeadings: {
        type: Boolean,
        required: false,
      },
      content: {
        type: Array,
        required: false,
      },
      "content.$": {
        type: Array,
        required: false,
      },
      "content.$.$": {
        type: String,
        required: false,
      },
    }, options),
  }, options);