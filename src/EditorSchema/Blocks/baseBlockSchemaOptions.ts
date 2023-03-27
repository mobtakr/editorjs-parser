export const baseBlockSchema = () => ({
  id: {
    type: String,
    required: false,
    max: 255,
  },
  type: {
    type: String,
    required: false,
    max: 255,
  },
});