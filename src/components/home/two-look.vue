<template>
  <ui-container>
    <ui-h1>2 Look</ui-h1>

    <oll-unit
      :tf="['TL', 'TM', 'TR', 'ML', 'MM', 'MR', 'BM']"
      :sf="['BL', 'BR']"
      :text="['FURF\'', 'RUR']"
    />
  </ui-container>
</template>

<script>
import {
  UiContainer,
  UiH1,
} from '../../ui';

import OllUnit from './oll-unit.vue';

export default {
  name: 'TwoLook',

  components: {
    OllUnit,
    UiContainer,
    UiH1,
  },
};
</script>
