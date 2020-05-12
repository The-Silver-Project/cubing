<template>
  <section class="ui-card">
    <slot></slot>
  </section>
</template>

<style scoped>
.ui-card {
  background-color: #001f44;
  padding: 15px;
  border: 2px solid rgb(253, 56, 148);
  border-radius: 6px;
  color: rgba(255, 255, 255, .7);
  font-weight: 700;
}
</style>
