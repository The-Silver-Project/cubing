<template>
  <canvas :height="height" :width="width" ref="canvas">
  </canvas>
</template>

<script>
/* eslint-disable no-param-reassign */
export default {
  name: 'OllFigure',

  props: {
    tf: { type: Array, required: true },
    sf: { type: Array, required: true },
  },

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

  methods: {
    getCubeTopFaceParams(str) {
      if (str === 'TL') return '00';
      if (str === 'TM') return '01';
      return null;
    },

    drawCubeTopFace(ctx) {
      ['L', 'M', 'R'].forEach((iLetter, i) => {
        ['T', 'M', 'B'].forEach((jLetter, j) => {
          const pair = `${jLetter}${iLetter}`;
          if (this.tf.includes(pair)) ctx.fillStyle = 'rgb(237, 202, 0)';
          else ctx.fillStyle = 'rgb(215, 215, 171)';

          const startX = this.markerThickness + this.gutterWidth * (i + 1) + this.squareSide * i;
          const startY = this.markerThickness + this.gutterWidth * (j + 1) + this.squareSide * j;
          ctx.fillRect(startX, startY, this.squareSide, this.squareSide);
        });
      });
    },

    getMarkerX(pair) {
      const first = pair[0];
      const second = pair[1];
      const {
        width,
        markerThickness,
        squareSide,
        gutterWidth,
      } = this;
      if (first === 'L') return 0;
      if (first === 'R') return width - markerThickness;
      if (second === 'L') return markerThickness + gutterWidth;
      if (second === 'M') return markerThickness + (2 * gutterWidth) + squareSide;
      if (second === 'R') return markerThickness + (3 * gutterWidth) + (2 * squareSide);
      return null;
    },

    getMarkerY(pair) {
      const first = pair[0];
      const second = pair[1];
      const {
        width,
        markerThickness,
        squareSide,
        gutterWidth,
      } = this;
      if (first === 'T') return 0;
      if (first === 'B') return width - markerThickness;
      if (second === 'T') return markerThickness + gutterWidth;
      if (second === 'M') return markerThickness + (2 * gutterWidth) + squareSide;
      if (second === 'B') return markerThickness + (3 * gutterWidth) + (2 * squareSide);
      return null;
    },

    getMarkerWidth(pair) {
      const first = pair[0];
      if (first === 'T' || first === 'B') return this.squareSide;
      return this.markerThickness;
    },

    getMarkerHeight(pair) {
      const first = pair[0];
      if (first === 'L' || first === 'R') return this.squareSide;
      return this.markerThickness;
    },

    drawMarkers(ctx) {
      ctx.fillStyle = 'rgb(179, 155, 0)';
      this.sf.forEach((marker) => {
        ctx.fillRect(
          this.getMarkerX(marker),
          this.getMarkerY(marker),
          this.getMarkerWidth(marker),
          this.getMarkerHeight(marker),
        );
      });
    },
  },

  mounted() {
    const ctx = this.$refs.canvas.getContext('2d');
    this.drawCubeTopFace(ctx);
    this.drawMarkers(ctx);
  },
};
</script>
