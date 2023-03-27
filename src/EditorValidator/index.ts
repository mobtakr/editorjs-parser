import SimpleSchema from 'simpl-schema';

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

const createEditorValidator = (blockValidators:SimpleSchema[]) => {
        const options = {
            ...baseEditorSchemaOptions(),
            'blocks.$': SimpleSchema.oneOf(
                ...blockValidators
            )
        };
        return new SimpleSchema(options);
};

export default createEditorValidator;