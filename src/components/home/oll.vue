<template>
  <section>
    <ui-container>
      <ui-h1>OLL</ui-h1>

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
.oll-unit {
  margin-bottom: 12px;
}
.oll-unit:last-child {
  margin-bottom: 0;
}
</style>
