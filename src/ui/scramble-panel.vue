<template>
  <div class="ui-scramble-panel" @click="scramble">
    {{ algo }}
  </div>
</template>

<script>
import scramble from '../utils/scramble';

export default {
  name: 'UiScramblePanel',

  data() {
    return {
      algo: scramble(3, 30),
    };
  },

  mounted() {
    this.$bus.$on('scramble', this.scramble);
  },

  methods: {
    scramble() {
      this.algo = scramble(3, 30);
    },
  },
};
</script>

<style scoped>
.ui-scramble-panel {
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.2;
  cursor: pointer;
}
</style>
