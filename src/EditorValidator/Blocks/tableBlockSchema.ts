import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const tableBlockSchema = () => new SimpleSchema({
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
        'content.$': {
            type: Array,
            required: false,
        },
        'content.$.$': {
            type: String,
            required: false,
        },
    })
});