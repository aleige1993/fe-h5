<template>
  <div id="roundProgressPanel" class="round-progress-panel">
    <!--<div class="round-bg"></div>-->
    <canvas id="round-canvas" class="round-canvas"></canvas>
    <div class="round-circle"></div>
  </div>
</template>

<script>
  export default {
    name: 'roundProgressPanel',
    props: {
      money: Number,
      maxMoney: Number
    },
    methods: {
      drawPanel(options) {
        let canvas = document.getElementById(options.id);
        let ctx = null;
        if (canvas && (ctx = canvas.getContext('2d'))) {
          canvas.width = canvas.height = '200';
          let noop = function() {};
          let before = options.onBefore || noop;
          let after = options.onAfter || noop;
          before(ctx);
          ctx.fillStyle = options.color || '#ffffff';
          let step = options.step || 1;
          let delay = options.delay || 1;
          let i = 0;
          let rage = 360 * (options.percent || 0);
          let sRage = -Math.PI * 0.5;
          let djs = function() {
            i = i + step;
            if (i <= rage) {
              ctx.beginPath();
              ctx.moveTo(100, 100);
              ctx.arc(100, 100, 100, sRage, Math.PI * 2 * (i / 360) + sRage);
              ctx.fill();
              setTimeout(djs, delay);
            } else {
              after(ctx);
            }
          };
          djs();
        }
      }
    },
    mounted() {
      this.drawPanel({
        id: 'round-canvas',
        percent: this.money / this.maxMoney,
        onBefore(ctx) {
          ctx.fillStyle = '#66b2fd';
          ctx.beginPath();
          ctx.moveTo(100, 100);
          ctx.arc(100, 100, 100, 0, Math.PI * 2);
          ctx.fill();
        },
        onAfter(ctx) {
//          console.log(ctx);
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
  /*.round-progress-panel,*/
  /*.round-progress-panel .round-bg,*/
  /*.round-progress-panel .round-canvas {*/
    /*width: 5.8rem;*/
    /*height: 5.8rem;*/
  /*}*/
  /*.round-progress-panel .round-bg,*/
  .round-progress-panel .round-canvas,
  .round-progress-panel .round-circle {
    position:absolute;
  }
  .round-progress-panel{
    position:relative;
    z-index: 2;
    width: 5.8rem;
    height: 5.8rem;
    /*margin: 0 auto;*/
    overflow: hidden;
    -webkit-overflow: hidden;
    border-radius: 50%;
    background: #40AFFE;
    /*.round-bg {*/
      /*background:#ffffff;*/
      /*border-radius:65px;*/
    /*}*/
    .round-canvas {
      left: -.1rem;
      top: -.1rem;
      width: 6rem;
      height: 6rem;
      z-index: 1;
    }
    .round-circle {
      display: table;
      left: .1rem;
      top: .1rem;
      z-index: 3;
      width: 5.6rem;
      height: 5.6rem;
      background:#2094fb;
      border-radius:50%;
    }
  }
</style>
