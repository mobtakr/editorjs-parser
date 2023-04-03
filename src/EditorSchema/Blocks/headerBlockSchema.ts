import SimpleSchema from "simpl-schema";
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";
import {_baseBlockSchema} from "./_baseBlockSchema";

export const HeaderBlockSchema = (
    options: SimpleSchemaOptions | undefined = undefined
) =>
    new SimpleSchema({
        ..._baseBlockSchema(),
        data: new SimpleSchema(
            {
                level: {
                    type: Number,
                    required: false,
                    min: 1,
                    max: 6,
                },
                text: {
                    type: String,
                    required: false,
                    max: 16384,
                },
            },
            options
        ),
    }, options);