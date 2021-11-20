<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="title">The Quote</h2>
          <p slot="content">A wonderful Quote</p>
          <p slot="content">Test 1</p>
          <p slot="title">Test 2</p>
          <p slot="content">Test 3</p>
          <p>Hey</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";

export default {
  components: {
    appQuote: Quote,
  },
};
</script>

<style>
h2 {
  color: blue;
}
</style>
