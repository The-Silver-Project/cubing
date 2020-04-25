<template>
  <section>
    <ui-container>
      <ui-h1>Scores</ui-h1>
      <ui-card v-if="solves.length > 0">
        <b>{{ solveHeader }}</b><br>
        <b>Time:</b> {{ solves[showSolve].timestring }}<br>
        <b>Scramble:</b> {{ solves[showSolve].scramble }}
      </ui-card>
      <table style="table-layout: auto; width: 100%; text-align: center;">
        <thead>
          <th>#</th>
          <th>time</th>
          <th>ao5</th>
          <th>ao12</th>
        </thead>
        <tr
          v-for="(solve, index) in solves"
          :key=index
          @click="showSolve = index"
          style="cursor: pointer;"
        >
          <td>{{ getSolveNumber(index) }}</td>
          <td>{{ solve.timestring }}</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </table>
    </ui-container>
  </section>
</template>

<script>
import { getTimestring } from '../../utils/common';
import {
  UiContainer,
  UiH1,
  UiCard,
} from '../../ui';

export default {
  name: 'Scores',

  components: {
    UiContainer,
    UiH1,
    UiCard,
  },

  data() {
    return {
      solves: [],
      showSolve: 0,
    };
  },

  mounted() {
    this.loadFromStorage();
    this.$bus.$on('timer-stop', this.addSolve);
  },

  computed: {
    solveHeader() {
      return `Solve #${this.getSolveNumber(this.showSolve)}`;
    },
  },

  methods: {
    addSolve() {
      const { solveTime } = this.$store.state;
      const solve = {
        time: solveTime,
        timestring: getTimestring(solveTime),
        scramble: this.$store.state.currentSolvedScramble,
      };

      this.solves.unshift(solve);
      this.saveToStorage();
    },

    saveToStorage() {
      localStorage.setItem('solves', JSON.stringify(this.solves));
    },

    loadFromStorage() {
      let solves = [];
      try {
        solves = JSON.parse(localStorage.getItem('solves') || '[]');
      } catch (e) {
        // Remove corrupted item from storage
        localStorage.removeItem('solves');
      }

      this.solves = solves;
    },

    getSolveNumber(index) {
      return this.solves.length - index;
    },
  },
};
</script>
