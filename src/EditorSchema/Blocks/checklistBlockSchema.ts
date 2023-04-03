import SimpleSchema from "simpl-schema";
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";
import {_baseBlockSchema} from "./_baseBlockSchema";

export const ListBlockSchema = (
    options: SimpleSchemaOptions | undefined = undefined
) =>
    new SimpleSchema({
        ..._baseBlockSchema(),
        data: new SimpleSchema(
            {
                items: {
                    type: Array,
                    required: false,
                },
                "items.$": {
                    type: new SimpleSchema({
                        text: {
                            type: String,
                            required: false,
                            max: 8192,
                        },
                        checked: {
                            type: Boolean,
                            required: false,
                        },
                    }),
                    required: false,
                    max: 128,
                },
            },
            options
        ),
    }, options);