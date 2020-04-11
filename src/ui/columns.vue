<template>
  <section
    class="ui-columns"
    :style="{
      'justify-content': justify,
      'align-items': align,
    }"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'UiColumns',

  props: {
    justify: String,
    align: String,
  },
};
</script>

<style scoped>
.ui-columns {
  display: flex;
}
</style>
