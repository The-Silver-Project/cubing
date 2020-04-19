<template>
  <div :class="timerClass">
    {{ timestring }}
  </div>
</template>

<script>
/* eslint-disable prefer-template */
function padZero(n) {
  return n >= 10 ? `${n}` : '0' + n;
}

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
        this.timerState = STATE.IDLE;
        this.$bus.$emit('scramble');
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
  },

  computed: {
    timestring() {
      let time = Math.floor(this.timeElapsed / 10);
      const ms = time - 100 * Math.floor(time / 100); time = Math.floor(time / 100);
      const s = time - 60 * Math.floor(time / 60); time = Math.floor(time / 60);
      const m = time - 60 * Math.floor(time / 60); time = Math.floor(time / 60);
      const h = time;

      return (h ? padZero(h) + ':' : '')
          + (m ? padZero(m) + ':' : '')
          + padZero(s) + ':'
          + padZero(ms);
    },

    timerClass() {
      return {
        'ui-stop-watch': true,
        red: this.timerState === STATE.HOLD || this.timerState === STATE.STOP,
        green: this.timerState === STATE.START,
      };
    },
  },
};
</script>

<style scoped>
.ui-stop-watch {
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
}

.red {
  color: #d60000;
}

.green {
  color: #1cbd00;
}
</style>
