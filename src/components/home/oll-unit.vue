<template>
  <ui-columns justify="flex-start" align="flex-start">
    <oll-figure
      class="oll-figure"
      :tf=oll.tf
      :sf=oll.sf
    />

    <div class="details">
      <ui-columns justify="flex-start" align="flex-start" class="header-details">
        <div>{{ oll.name }}</div>
        <div
          :class="{
            chance: true,
            [`chance-${oll.chance}`]: true
          }"
        >1 in {{ oll.chance }} chance</div>
      </ui-columns>

      <ol>
        <li
          v-for="(text, index) in oll.algorithms"
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
import OllFigure from './oll-figure.vue';

export default {
  name: 'OllUnit',

  components: {
    Algorithm,
    OllFigure,
    UiColumns,
  },

  props: {
    oll: { type: Object, required: true },
  },
};
</script>

<style scoped>
.oll-figure {
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
.chance-108 {
  color: #af8816;
}
.chance-216 {
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
