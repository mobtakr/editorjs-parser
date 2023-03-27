import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const headerBlockSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        level: {
            type: Number,
            required: false,
            min: 1,
            max: 6
        },
        text: {
            type: String,
            required: false,
            max: 16384
        },
    })
});