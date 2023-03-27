import SimpleSchema from 'simpl-schema';
import { SimpleSchemaOptions } from "simpl-schema/dist/esm/types";

export const baseEditorSchema = () => ({
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

export const baseEditorSchemaOptions = {
  clean: {
    filter: true,
    autoConvert: true,
    trimStrings: true,
    getAutoValues: true,
    removeNullsFromArrays: true,
  },
  requiredByDefault: true,
};

const createEditorSchema = (blockValidators:((options: SimpleSchemaOptions | undefined) => SimpleSchema)[], options: SimpleSchemaOptions | undefined = baseEditorSchemaOptions) => {
        const schema = {
          ...baseEditorSchema(),
          "blocks.$": SimpleSchema.oneOf(
            ...blockValidators.map((blockValidator) => blockValidator(options))
          ),
        };
        return new SimpleSchema(schema);
};

export default createEditorSchema;