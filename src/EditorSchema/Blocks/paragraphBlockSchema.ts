import SimpleSchema from "simpl-schema";
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";
import {_baseBlockSchema} from "./_baseBlockSchema";

export const ParagraphBlockSchema = (
    options: SimpleSchemaOptions | undefined = undefined
) =>
    new SimpleSchema({
        ..._baseBlockSchema(),
        data: new SimpleSchema(
            {
                text: {
                    type: String,
                    required: false,
                    max: 16384,
                },
            },
            options
        ),
    }, options);