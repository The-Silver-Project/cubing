<template>
  <ui-card>
    <ui-columns justify="flex-start" align="flex-start">
      <oll-figure
        class="oll-figure"
        :tf=tf
        :sf=sf
        :text=text
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
import OllFigure from './oll-figure.vue';

export default {
  name: 'OllUnit',

  components: {
    Algorithm,
    OllFigure,
    UiCard,
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
