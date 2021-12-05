export const fruitMixin = {
  data: () => ({
    text: "hey",
    text2: "HEY",
    fruits: ["Apple", "Banana", "Mango", "Melon"],
    filterText: "",
  }),

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },

  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
};
