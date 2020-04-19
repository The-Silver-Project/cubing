<template>
  <section>
    <ui-container>
      <ui-h1>Timer</ui-h1>
      <ui-scramble-panel></ui-scramble-panel>
      <ui-cube-timer></ui-cube-timer>
    </ui-container>
  </section>
</template>

<script>
import {
  UiContainer,
  UiH1,
  UiCubeTimer,
  UiScramblePanel,
} from '../../ui';

export default {
  name: 'Timer',

  components: {
    UiContainer,
    UiH1,
    UiCubeTimer,
    UiScramblePanel,
  },
};
</script>
