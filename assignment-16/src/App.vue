<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectedComponent = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <component :is="selectedComponent">
          <h3>A message</h3>
        </component>
        <!-- <app-blue>
          <h3>Blue message</h3>
        </app-blue>e
        <app-green>
          <h3>Green message</h3>
        </app-green>
        <app-red>
          <h3>Red message</h3>
        </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function () {
    return {
      selectedComponent: "appBlue",
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style></style>
