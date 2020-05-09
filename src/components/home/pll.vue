<template>
  <section>
    <ui-container>
      <ui-h1>PLL</ui-h1>

      <pll-figure />
    </ui-container>
  </section>
</template>

<script>
import {
  UiContainer,
  UiH1,
} from '../../ui';

import PllFigure from './pll-figure.vue';

export default {
  name: 'Pll',

  components: {
    PllFigure,
    UiContainer,
    UiH1,
  },
};
</script>
