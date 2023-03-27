import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const listBlockSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        items: {
            type: Array,
            required: false,
            max: 128
        },
        'items.$': {
            type: String,
            required: false,
            max: 8192
        },
        style: {
            type: String,
            required: false,
            max: 255
        },
    })
});