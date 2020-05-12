<template>
  <section class="wrap">

    <div>
      <ui-container>
        <ui-h1>Scores</ui-h1>

        <ui-card v-if="solves.length">
          <ui-columns justify="flex-start" align="flex-start">
            <div>
              <div class="solve-number">{{ solveHeader }}</div>
              <div class="solve-scramble">{{ solves[showSolve].scramble }}</div>
            </div>

            <div class="solve-time">{{ solves[showSolve].timestring }}</div>
          </ui-columns>
        </ui-card>

        <ui-card v-else>
          Start using the timer to see your past scores
        </ui-card>
      </ui-container>
    </div>

    <div class="table-wrap custom-scroll" v-if="solves.length  ">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>time</th>
            <th>ao5</th>
            <th>ao12</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(solve, index) in solves"
            :key=index
            @click="showSolve = index"
            :class="{
              selected: showSolve === index
            }"
          >
            <td>{{ getSolveNumber(index) }}</td>
            <td>{{ solve.timestring }}</td>
            <td>{{ getAo5(index) }}</td>
            <td>{{ getAo12(index) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { getTimestring } from '../../utils/common';
import {
  UiCard,
  UiColumns,
  UiContainer,
  UiH1,
} from '../../ui';

export default {
  name: 'Scores',

  components: {
    UiCard,
    UiColumns,
    UiContainer,
    UiH1,
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
      return `#${this.getSolveNumber(this.showSolve)}`;
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

    getAo5(solveNum) {
      if (solveNum + 5 > this.solves.length) return '-';
      return getTimestring(
        this.solves.slice(solveNum, solveNum + 5).reduce((acc, cur) => acc + cur.time, 0) / 5,
      );
    },

    getAo12(solveNum) {
      if (solveNum + 12 > this.solves.length) return '-';
      return getTimestring(
        this.solves.slice(solveNum, solveNum + 12).reduce((acc, cur) => acc + cur.time, 0) / 12,
      );
    },
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}

.table-wrap {
  overflow: auto;
}

.solve-number,
.solve-time {
  color: rgb(253, 56, 148);
  font-size: 16px;
  font-weight: 800;
}
.solve-number {
  font-size: 16px;
}
.solve-time {
  font-size: 48px;
  align-self: center;
  margin-left: 12px;
}
.solve-scramble {
  margin-top: 6px;
}

table {
  width: 100%;
  text-align: right;
  border-collapse: collapse;
}

th {
  color: rgb(52, 164, 183);
  background-color: #f0f0f0;
  padding-top: 18px;
  padding-bottom: 9px;
  position: sticky;
  top: 0;
}

tbody {
  overflow: auto;
}

td {
  color: rgb(0, 115, 160);
  font-weight: 700;
  font-size: 12px;
  padding: 9px 0;
}
th:last-child,
td:last-child {
  padding-right: 12px;
}

tbody tr {
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #f4f4f4;
}

.selected {
  box-shadow: 0 0 2px inset rgb(253, 56, 148);
}
</style>
