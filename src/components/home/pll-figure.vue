<template>
  <canvas :width="width" :height="height" ref="canvas"></canvas>
</template>

<script>
/* eslint-disable no-param-reassign */
export default {
  name: 'PllFigure',

  props: {
    markers: { type: String, required: true },
    arrows: { type: Array, required: true },
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
    drawCubeTopFace(ctx) {
      ctx.fillStyle = 'rgb(237, 202, 0)';
      ['L', 'M', 'R'].forEach((iLetter, i) => {
        ['T', 'M', 'B'].forEach((jLetter, j) => {
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

    getMarkerColorFromCode(code) {
      const map = {
        W: 'rgb(191, 191, 191)',
        Y: 'rgb(237, 202, 0)',
        R: 'rgb(209, 113, 118)',
        O: 'rgb(255, 165, 0)',
        B: 'rgb(113, 161, 209)',
        G: 'rgb(155, 209, 113)',
      };
      return map[code] || 'rgb(255, 255, 255)';
    },

    drawMarkers(ctx) {
      ctx.fillStyle = 'rgb(179, 155, 0)';
      const positions = [
        'TL', 'TM', 'TR',
        'RT', 'RM', 'RB',
        'BR', 'BM', 'BL',
        'LB', 'LM', 'LT',
      ];

      positions.forEach((marker, index) => {
        const markerColor = this.getMarkerColorFromCode(this.markers[index]);
        ctx.fillStyle = markerColor;

        ctx.fillRect(
          this.getMarkerX(marker),
          this.getMarkerY(marker),
          this.getMarkerWidth(marker),
          this.getMarkerHeight(marker),
        );
      });
    },

    rotate(point, angle) {
      const rotationAngle = angle + (Math.PI / 2);
      return [
        point[0] * Math.cos(rotationAngle) - point[1] * Math.sin(rotationAngle),
        point[0] * Math.sin(rotationAngle) + point[1] * Math.cos(rotationAngle),
      ];
    },

    drawArrowHead(point, angle, ctx) {
      const vertexA = this.rotate([0, -3], angle);
      const vertexB = this.rotate([-3, 3], angle);
      const vertexC = this.rotate([3, 3], angle);

      vertexA[0] += point[0];
      vertexB[0] += point[0];
      vertexC[0] += point[0];
      vertexA[1] += point[1];
      vertexB[1] += point[1];
      vertexC[1] += point[1];

      ctx.beginPath();
      ctx.moveTo(vertexA[0], vertexA[1]);
      ctx.lineTo(vertexB[0], vertexB[1]);
      ctx.lineTo(vertexC[0], vertexC[1]);
      ctx.closePath();
      ctx.fill();
    },

    drawArrow(from, to, ctx) {
      ctx.fillStyle = 'rgb(0, 146, 179)';
      ctx.beginPath();
      ctx.moveTo(from[0], from[1]);
      ctx.lineTo(to[0], to[1]);
      ctx.stroke();

      const slope = (to[1] - from[1]) / (to[0] - from[0]);
      const angle = Math.atan(slope) + (from[0] > to[0] ? Math.PI : 0);

      this.drawArrowHead(to, angle, ctx);
    },

    getSquareMiddleX(code) {
      const { markerThickness, gutterWidth, squareSide } = this;
      const map = {
        L: markerThickness + gutterWidth + squareSide / 2,
        M: markerThickness + gutterWidth * 2 + squareSide * 1.5,
        R: markerThickness + gutterWidth * 3 + squareSide * 2.5,
      };
      return map[code];
    },

    getSquareMiddleY(code) {
      const { markerThickness, gutterWidth, squareSide } = this;
      const map = {
        T: markerThickness + gutterWidth + squareSide / 2,
        M: markerThickness + gutterWidth * 2 + squareSide * 1.5,
        B: markerThickness + gutterWidth * 3 + squareSide * 2.5,
      };
      return map[code];
    },

    getPointFromCode(code) {
      const { squareSide } = this;
      const point = [
        this.getSquareMiddleX(code[0]),
        this.getSquareMiddleY(code[1]),
      ];
      if (code[2] === 'L') point[0] -= squareSide * 0.4;
      if (code[2] === 'R') point[0] += squareSide * 0.4;
      if (code[3] === 'T') point[1] -= squareSide * 0.4;
      if (code[3] === 'B') point[1] += squareSide * 0.4;
      return point;
    },

    drawArrows(ctx) {
      this.arrows.forEach((arrow) => {
        const from = this.getPointFromCode(arrow[0]);
        const to = this.getPointFromCode(arrow[1]);
        this.drawArrow(from, to, ctx);
      });
    },
  },

  mounted() {
    const ctx = this.$refs.canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 146, 179)';
    this.drawCubeTopFace(ctx);
    this.drawMarkers(ctx);
    this.drawArrows(ctx);
  },
};
</script>
