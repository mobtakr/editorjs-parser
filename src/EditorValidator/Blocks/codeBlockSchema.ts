import SimpleSchema from "simpl-schema";
import { baseBlockSchemaOptions } from "./baseBlockSchemaOptions";

export const blockCodeSchema = () => new SimpleSchema({
    ...baseBlockSchemaOptions(),
    data: new SimpleSchema({
        code: {
            type: String,
            required: false,
            max: 16384
        },
    })
});