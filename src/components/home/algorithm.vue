<template>
  <ui-columns justify="flex-start" align="flex-start">
    <div
      v-for="(unit, index) in text"
      :key="index"
      :class="unit.replace(/'/g, '-')"
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
  margin-right: 9px;
  font-size: 12px;
  font-weight: 700;
  color: rgb(94, 94, 94);
  background-color: rgba(141, 141, 141, 0.11)
}
.RUR-U- {
  color: rgb(253, 56, 148);
  background-color: rgba(253, 56, 148, 0.137);
}
.R-FRF- {
  color: rgb(59, 185, 0);
  background-color: rgba(59, 185, 0, 0.13);
}
</style>
