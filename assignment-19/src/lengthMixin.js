export const lengthMixin = {
  computed: {
    lengthened() {
      return this.text + " (" + this.text.length + ")";
    },
  },
};
