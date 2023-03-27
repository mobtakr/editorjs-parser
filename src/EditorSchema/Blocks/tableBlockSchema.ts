import SimpleSchema from "simpl-schema";
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";
import {_baseBlockSchema} from "./_baseBlockSchema";

export const TableBlockSchema = (
    options: SimpleSchemaOptions | undefined = undefined
) =>
    new SimpleSchema({
        ..._baseBlockSchema(),
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