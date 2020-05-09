<template>
  <ui-columns justify="flex-start" align="flex-start">
    <oll-figure
      class="oll-figure"
      :tf=tf
      :sf=sf
    />

    <div>
      <algorithm :text=text />
    </div>
  </ui-columns>
</template>

<script>
import {
  UiColumns,
} from '../../ui';

import Algorithm from './algorithm.vue';
import OllFigure from './oll-figure.vue';

export default {
  name: 'OllUnit',

  components: {
    Algorithm,
    OllFigure,
    UiColumns,
  },

  props: {
    tf: { type: Array, required: true },
    sf: { type: Array, required: true },
    text: { type: Array, required: true },
  },
};
</script>

<style scoped>
.oll-figure {
  margin-right: 15px;
}
</style>
