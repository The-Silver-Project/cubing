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
  color: rgb(0, 115, 160);
  border-top: 2px solid rgba(0, 115, 160, 0.7);
}
.RUR-U- {
  color: rgb(253, 56, 148);
  border-top: 2px solid rgba(253, 56, 148, .7);
}
.R-FRF- {
  color: rgb(16, 165, 131);
  border-top: 2px solid rgba(16, 165, 131, .7)
}
</style>
