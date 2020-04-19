<template>
  <ui-columns justify="flex-start" align="flex-start">
    <div
      v-for="(unit, index) in text"
      :key="index"
      :class="unit.replace('\'', '-')"
    >{{ unit }}</div>
  </ui-columns>
</template>

<script>
import { UiColumns } from '../../ui';

export default {
  name: 'Algorithm',

  components: {
    UiColumns,
  },

  props: {
    text: { type: Array, required: true },
  },
};
</script>

<style scoped>
div {
  font-weight: 700;
  margin-right: 6px;
}
div:last-child {
  margin-right: 0;
}
</style>
