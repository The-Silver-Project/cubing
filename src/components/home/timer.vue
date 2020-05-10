<template>
  <section>
    <ui-container>
      <ui-h1 class="heading">Timer</ui-h1>
      <scramble-panel></scramble-panel>
      <cube-timer></cube-timer>
    </ui-container>
  </section>
</template>

<script>
import {
  UiContainer,
  UiH1,
} from '../../ui';

import ScramblePanel from './scramble-panel.vue';
import CubeTimer from './cube-timer.vue';

export default {
  name: 'Timer',

  components: {
    CubeTimer,
    ScramblePanel,
    UiContainer,
    UiH1,
  },
};
</script>

<style scoped>
.heading {
  color: rgb(253, 56, 148);
}
</style>
