import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const quoteBlockSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        alignment: {
            type: String,
            required: false,
            max: 255
        },
        caption: {
            type: String,
            required: false,
            max: 255
        },
        text: {
            type: String,
            required: false,
            max: 16384
        },
    })
});