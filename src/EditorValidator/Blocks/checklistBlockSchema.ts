import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const listBlockSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        items: {
            type: Array,
            required: false,
        },
        'items.$': {
            type: new SimpleSchema({
                text: {
                    type: String,
                    required: false,
                    max: 8192
                },
                checked: {
                    type: Boolean,
                    required: false,
                },
            }),
            required: false,
            max: 128
        },
    })
});