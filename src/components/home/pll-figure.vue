<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script>
export default {
  name: 'PllFigure',

  data: () => {
    const markerThickness = 3;
    const gutterWidth = 2;
    const width = 50;
    const height = 50;
    const squareSide = (width - (gutterWidth * 4) - (markerThickness * 2)) / 3;
    return {
      markerThickness,
      gutterWidth,
      width,
      height,
      squareSide,
    };
  },

  // mounted() {
  //   const ctx = this.$refs.canvas.getContext('2d');
  //   this.drawCubeTopFace(ctx);
  //   this.drawMarkers(ctx);
  // },
};
</script>
