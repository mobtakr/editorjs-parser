import SimpleSchema from 'simpl-schema';
import {SimpleSchemaOptions} from "simpl-schema/dist/esm/types";

export * from './Blocks';

const _baseEditorSchema = () => ({
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

const _baseEditorSchemaOptions = {
    clean: {
        filter: true,
        autoConvert: true,
        trimStrings: true,
        getAutoValues: true,
        removeNullsFromArrays: true,
    },
    requiredByDefault: true,
};

export const createEditorSchema = (blockValidators: ((options: SimpleSchemaOptions | undefined) => SimpleSchema)[], options: SimpleSchemaOptions | undefined = _baseEditorSchemaOptions) => {
    const schema = {
        ..._baseEditorSchema(),
        "blocks.$": SimpleSchema.oneOf(
            ...blockValidators.map((blockValidator) => blockValidator(options))
        ),
    };
    return new SimpleSchema(schema);
};