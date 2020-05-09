<template>
  <section class="wrap custom-scroll">
    <ui-container class="heading-wrap">
      <ui-h1 class="heading">OLL</ui-h1>
    </ui-container>

    <ui-container>
      <div
        v-for="type in Object.keys(olls)"
        :key="type"
      >
        <ui-h2>{{ olls[type].title }}</ui-h2>

        <oll-unit
          v-for="oll in olls[type].units"
          :key="oll.name"
          :oll="oll"
          class="oll-unit"
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

import OllUnit from './oll-unit.vue';

export default {
  name: 'Oll',

  components: {
    OllUnit,
    UiContainer,
    UiH1,
    UiH2,
  },

  data: () => ({
    olls: {
      OCLL: {
        title: 'All Edges Oriented Correctly',
        units: data.oll.slice(0, 7),
      },
      T: {
        title: 'T Shapes',
        units: data.oll.slice(7, 9),
      },
      S: {
        title: 'Squares',
        units: data.oll.slice(9, 11),
      },
      C: {
        title: 'C Shapes',
        units: data.oll.slice(11, 13),
      },
      W: {
        title: 'W Shapes',
        units: data.oll.slice(13, 15),
      },
      E: {
        title: 'Corners Correct, Edges Flipped',
        units: data.oll.slice(15, 17),
      },
      P: {
        title: 'P Shapes',
        units: data.oll.slice(17, 21),
      },
      I: {
        title: 'I Shapes',
        units: data.oll.slice(21, 25),
      },
      F: {
        title: 'Fish Shapes',
        units: data.oll.slice(25, 29),
      },
      K: {
        title: 'Knight Move Shapes',
        units: data.oll.slice(29, 33),
      },
      A: {
        title: 'Awkward Shapes',
        units: data.oll.slice(33, 37),
      },
      L: {
        title: 'L Shapes',
        units: data.oll.slice(37, 43),
      },
      B: {
        title: 'Lightning Bolts',
        units: data.oll.slice(43, 49),
      },
      O: {
        title: 'No Edges Flipped Correctly',
        units: data.oll.slice(49, 57),
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

.oll-unit {
  margin-bottom: 36px;
}
</style>
