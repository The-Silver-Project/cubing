<template>
  <div class="scramble-panel">
    <div class="scramble-nav-wrap">
      <button class="left-arrow" @click="prev" :disabled="isPrevDisabled"></button>

      <div class="text">{{total - i}} of {{ $store.state.MAX_SCRAMBLES }}</div>

      <button
        @click="next"
        :class="{
          'right-arrow': !isNewScramble
        }"
      >
        <div v-if="isNewScramble" class="plus">&#10010;</div>
      </button>
    </div>

    <div class="scramble">{{ currentScramble }}</div>
  </div>
</template>

<script>
import scramble from '../../utils/scramble';

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
.scramble-panel {
  margin-top: 30px;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, .7);
  text-transform: uppercase;
}

.scramble-nav-wrap {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 11px;
  margin-bottom: 6px;
  color: rgb(47, 116, 128);
}
.scramble-nav-wrap .text {
  margin-left: 12px;
  margin-right: 12px;
}

.left-arrow,
.right-arrow {
  width: 7px;
  height: 7px;
  border-left: 2px solid rgb(47, 116, 128);
  border-top: 2px solid rgb(47, 116, 128);
}
.left-arrow[disabled],
.right-arrow[disabled] {
  visibility: hidden;
}
.left-arrow {
  transform: rotate(-45deg);
}
.right-arrow {
  transform: rotate(135deg);
}

.plus {
  margin-top: 1px;
}

.scramble {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
}
</style>
