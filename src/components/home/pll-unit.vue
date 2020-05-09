<template>
  <ui-columns justify="flex-start" align="flex-start">
    <pll-figure
      class="pll-figure"
      :markers="pll.sf"
      :arrows="pll.arrows"
    />

    <div class="details">
      <ui-columns justify="flex-start" align="flex-start" class="header-details">
        <div>{{ pll.name }}</div>
        <div
          :class="{
            chance: true,
            [`chance-${pll.chance}`]: true
          }"
        >1 in {{ pll.chance }} chance</div>
      </ui-columns>

      <ol>
        <li
          v-for="(text, index) in pll.algorithms"
          :key=index
        >
          <algorithm :text=text />
        </li>
      </ol>
    </div>
  </ui-columns>
</template>

<script>
import {
  UiColumns,
} from '../../ui';

import Algorithm from './algorithm.vue';
import PllFigure from './pll-figure.vue';

export default {
  name: 'PllUnit',

  components: {
    Algorithm,
    PllFigure,
    UiColumns,
  },

  props: {
    pll: { type: Object, required: true },
  },
};
</script>

<style scoped>
.pll-figure {
  margin-right: 15px;
}

.header-details {
  font-size: 9px;
  font-weight: 700;
  margin-top: 3px;
  margin-bottom: 9px;
  line-height: 1;
}

.chance {
  color: rgb(52, 164, 183);
  margin-left: 12px;
  text-transform: uppercase;
}
.chance-36 {
  color: #af8816;
}
.chance-72 {
  color: #d0528c;
}

ol {
  margin: 0;
  padding: 0 0 0 12px;
  font-weight: 700;
  font-size: 9px;
}

li {
  margin-bottom: 3px;
}
</style>
