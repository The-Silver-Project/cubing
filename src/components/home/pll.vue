<template>
  <section class="wrap custom-scroll">
    <ui-container class="heading-wrap">
      <ui-h1 class="heading">PLL</ui-h1>
    </ui-container>

    <ui-container>
      <div
        v-for="type in Object.keys(plls)"
        :key="type"
      >
        <ui-h2>{{ plls[type].title }}</ui-h2>

        <pll-unit
          v-for="pll in plls[type].units"
          :key="pll.name"
          :markers="pll.sf"
          :arrows="pll.arrows"
          :text="pll.algorithms[0]"
          class="pll-unit"
        />
      </div>
    </ui-container>
  </section>
</template>

<script>
import data from '../../data';

import {
  UiContainer,
  UiH1,
  UiH2,
} from '../../ui';

import PllUnit from './pll-unit.vue';

export default {
  name: 'Pll',

  components: {
    PllUnit,
    UiContainer,
    UiH1,
    UiH2,
  },

  data: () => ({
    plls: {
      permuteEdges: {
        title: 'Permutations of Edges Only',
        units: data.pll.slice(0, 4),
      },
      permuteCorners: {
        title: 'Permutations of Corners Only',
        units: data.pll.slice(4, 7),
      },
      swapAdjacent: {
        title: 'Swap One Set of Adjacent Corners',
        units: data.pll.slice(7, 13),
      },
      swapDiagonal: {
        title: 'Swap One Set of Diagonal Corners',
        units: data.pll.slice(13, 17),
      },
      doubleCycles: {
        title: 'Double Cycles - G Permutations',
        units: data.pll.slice(17, 21),
      },
    },
  }),
};
</script>

<style scoped>
.wrap {
  overflow: auto;
  height: 100%;
}

.heading-wrap {
  position: sticky;
  top: 0;
  background-color: #fafafa;
  padding: 6px 15px;
  margin-top: 12px;
  margin-bottom: 12px;
}
.heading {
  margin: 0;
}

.pll-unit {
  margin-bottom: 36px;
}
</style>
