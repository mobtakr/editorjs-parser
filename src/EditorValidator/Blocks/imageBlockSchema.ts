import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const imageBlockSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        caption: {
            type: String,
            required: false,
            max: 255
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
            type: new SimpleSchema({
                url: {
                    type: String,
                    required: false,
                    max: 255
                },
                success: {
                    type: Number,
                    required: false,
                }
            })
        }
    })
});