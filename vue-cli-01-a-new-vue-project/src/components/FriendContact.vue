<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsareVisible ? "Hide" : "Show Details" }}
    </button>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    name: { type: String, required: true },
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>
