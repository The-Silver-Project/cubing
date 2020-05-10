<template>
  <section class="home-layout">
    <div class="home-section"><app-bar /></div>
    <div class="home-section"><oll /></div>
    <div class="home-section"><pll /></div>
    <div class="home-section timer-panel"><timer /></div>
    <div class="home-section"><scores /></div>
  </section>
</template>

<script>
import AppBar from '../components/home/app-bar.vue';
import Oll from '../components/home/oll.vue';
import Pll from '../components/home/pll.vue';
import Timer from '../components/home/timer.vue';
import Scores from '../components/home/scores.vue';

export default {
  name: 'Home',

  components: {
    AppBar,
    Oll,
    Pll,
    Timer,
    Scores,
  },
};
</script>

<style scoped>
.home-layout {
  height: 100%;
  display: flex;
  background: #fafafa;
}

.home-section {
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  border-right: 1px solid rgba(0, 0, 0, .07);
}
.home-section:first-child {
  flex: 0 0 60px;
}
.home-section:last-child {
  border-right: 0;
}

.timer-panel {
  background-color: #001f44;
  position: relative;
}
</style>
