<template>
  <section class="wrap custom-scroll">
    <ui-container class="heading-wrap">
      <ui-h1 class="heading">OLL</ui-h1>
    </ui-container>

    <ui-container>
      <oll-unit
        v-for="oll in this.olls"
        :key="oll.name"
        :tf="oll.tf"
        :sf="oll.sf"
        :text="oll.algorithms[0]"
        class="oll-unit"
      />
    </ui-container>
  </section>
</template>

<script>
import data from '../../data';

import {
  UiContainer,
  UiH1,
} from '../../ui';

import OllUnit from './oll-unit.vue';

export default {
  name: 'Oll',

  components: {
    OllUnit,
    UiContainer,
    UiH1,
  },

  data: () => ({
    olls: data.oll,
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
  margin-bottom: 12px;
}
</style>
