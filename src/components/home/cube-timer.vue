<template>
  <div :class="timerClass">
    {{ timestring }}
  </div>
</template>

<script>
import { getTimestring } from '../../utils/common';

let interval;

let holdStartTime = null;
const MIN_HOLD_TIME = 700;

const holdTime = () => (holdStartTime ? Date.now() - holdStartTime : 0);

const STATE = {
  IDLE: 'IDLE',
  HOLD: 'HOLD',
  START: 'START',
  RUN: 'RUN',
  STOP: 'STOP',
};

export default {
  name: 'UiCubeTimer',

  data() {
    return {
      timerState: STATE.IDLE,
      timeElapsed: 0,
    };
  },

  mounted() {
    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
  },

  methods: {
    keydown(event) {
      if (event.keyCode !== 32) return;

      if (this.timerState === STATE.RUN) {
        this.stop();
        this.timerState = STATE.STOP;
        return;
      }

      if (this.timerState === STATE.IDLE) {
        holdStartTime = Date.now();
        this.timerState = STATE.HOLD;
        return;
      }

      if (this.timerState === STATE.HOLD && holdTime() >= MIN_HOLD_TIME) {
        this.timerState = STATE.START;
      }
    },

    keyup(event) {
      if (event.keyCode !== 32) return;

      if (this.timerState === STATE.START) {
        this.start();
        this.timerState = STATE.RUN;
      } else {
        if (this.timerState === STATE.STOP) this.onStop();
        this.timerState = STATE.IDLE;
      }
    },

    start() {
      if (this.timerState === STATE.RUN) return;
      this.timeElapsed = 0;
      const startTime = Date.now();
      interval = setInterval(() => { this.timeElapsed = Date.now() - startTime; }, 10);
    },

    stop() {
      if (this.timerState !== STATE.RUN) return;
      if (interval) clearInterval(interval);
      interval = null;
    },

    onStop() {
      this.$store.commit('solveTime', this.timeElapsed);
      this.$bus.$emit('timer-stop');
    },
  },

  computed: {
    timestring() {
      return getTimestring(this.timeElapsed);
    },

    timerClass() {
      return {
        'stop-watch': true,
        red: this.timerState === STATE.HOLD || this.timerState === STATE.STOP,
        green: this.timerState === STATE.START,
      };
    },
  },
};
</script>

<style scoped>
.stop-watch {
  font-size: 48px;
  line-height: 1;
  font-weight: 800;
  color: #ff57bc;
  position: absolute;
  bottom: 24px;
  right:15%;
  margin-bottom: 0;
}

.red {
  color: #ff8265;
}

.green {
  color: #4fff95;
}
</style>
