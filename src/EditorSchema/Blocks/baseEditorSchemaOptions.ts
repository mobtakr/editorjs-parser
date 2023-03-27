export const baseEditorSchema = () => ({
  version: {
    type: String,
    required: false,
    max: 255,
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