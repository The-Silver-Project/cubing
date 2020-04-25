<template>
  <div class="ui-scramble-panel">
    <button @click="prev" :disabled="isPrevDisabled">prev</button>

    <span style="font-size: 15px;"> {{total - i}} / {{ $store.state.MAX_SCRAMBLES }} </span>

    <button @click="next" style="margin-bottom: 20px;">
      next<span v-if="isNewScramble"> +</span>
    </button>

    <div>{{ currentScramble }}</div>
  </div>
</template>

<script>
import scramble from '../utils/scramble';

export default {
  name: 'UiScramblePanel',

  data() {
    return {
      i: 0,
    };
  },

  created() {
    this.scramble(3, 30);
  },

  mounted() {
    this.$bus.$on('timer-stop', () => {
      this.$store.commit('currentSolvedScramble', this.currentScramble);
      this.scramble();
    });
  },

  computed: {
    currentScramble() {
      return this.$store.state.scrambles[this.i];
    },

    isPrevDisabled() {
      return this.i >= this.$store.state.scrambles.length - 1;
    },

    isNewScramble() {
      return this.i === 0;
    },

    total() {
      return this.$store.state.scrambles.length;
    },
  },

  methods: {
    scramble() {
      // Add next scramble only if user is on current scramble
      if (this.i === 0) {
        this.$store.commit('addScramble', scramble(3, 30));
      }
    },

    prev() {
      if (this.i < this.$store.state.scrambles.length - 1) this.i += 1;
    },

    next() {
      if (this.i > 0) this.i -= 1;
      else this.scramble();
    },
  },
};
</script>

<style scoped>
.ui-scramble-panel {
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.2;
}
</style>
