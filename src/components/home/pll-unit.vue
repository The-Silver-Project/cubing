<template>
  <ui-card>
    <ui-columns justify="flex-start" align="flex-start">
      <pll-figure
        class="pll-figure"
        :markers="markers"
        :arrows="arrows"
      />

      <div>
        <algorithm :text=text />
      </div>
    </ui-columns>
  </ui-card>
</template>

<script>
import {
  UiCard,
  UiColumns,
} from '../../ui';

import Algorithm from './algorithm.vue';
import PllFigure from './pll-figure.vue';

export default {
  name: 'PllUnit',

  components: {
    Algorithm,
    PllFigure,
    UiCard,
    UiColumns,
  },

  props: {
    text: { type: Array, required: true },
    markers: { type: String, required: true },
    arrows: { type: Array, required: true },
  },
};
</script>

<style scoped>
.pll-figure {
  margin-right: 15px;
}
</style>
