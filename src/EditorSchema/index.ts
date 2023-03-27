import SimpleSchema from 'simpl-schema';
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";

const baseEditorSchemaOptions = () => ({
    version: {
        type: String,
        required: false,
        max: 255
    },
    time: {
        type: Number,
        required: false,
    },
    blocks: {
        type: Array,
        required: true,
    },
});

const createEditorSchema = (blockValidators:((options: SimpleSchemaOptions | undefined) => SimpleSchema)[], options: SimpleSchemaOptions | undefined = undefined) => {
        const schema = {
          ...baseEditorSchemaOptions(),
          "blocks.$": SimpleSchema.oneOf(
            ...blockValidators.map((blockValidator) => blockValidator(options))
          ),
        };
        return new SimpleSchema(schema);
};

export default createEditorSchema;