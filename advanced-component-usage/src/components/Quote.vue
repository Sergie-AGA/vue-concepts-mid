<template>
  <div>
    <slot name="title"></slot>
    Hello
    <slot></slot>
    <slot name="content"></slot>
    <slot name="john">I have no content</slot>
  </div>
</template>

<script></script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h2 {
  color: red;
}
</style>
