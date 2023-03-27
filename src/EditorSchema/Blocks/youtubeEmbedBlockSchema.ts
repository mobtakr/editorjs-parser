import SimpleSchema from "simpl-schema";
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";
import {_baseBlockSchema} from "./_baseBlockSchema";

export const YoutubeEmbedBlockSchema = (
    options: SimpleSchemaOptions | undefined = undefined
) =>
    new SimpleSchema(
        {
            ..._baseBlockSchema(),
            data: new SimpleSchema(
                {
                    url: {
                        type: String,
                        required: false,
                        max: 255,
                    },
                },
                options
            ),
        },
        options
    );