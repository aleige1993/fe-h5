
<template>
  <div @click="closeCurrentModal" v-show="showCurrentModal" class="selectbrowser-modal">
    <ul>
      <li><span>1</span> 点击右上角的 <span ><img class="more" src="./img/more.png"></span> 按钮</li>
      <li v-if="this.$Tools.isAndroidBrowser()"><span>2</span> 选择 <span><img class="browser" src="./img/android-browser.png">在浏览器中打开</span> 按钮</li>
      <li v-if="this.$Tools.isAppleBrowser()"><span>2</span> 选择 <span><img class="browser" src="./img/apple-browser.png">在safari浏览器中打开</span> 按钮</li>
    </ul>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showModal: false
      };
    },
    props: {
      isShow: false
    },
    computed: {
      showCurrentModal() {
        return this.$data.showModal;
      }
    },
    methods: {
      closeCurrentModal() {
        this.$emit('on-close', false);
      }
    },
    watch: {
      isShow(val) {
        this.$data.showModal = val;
      }
    },
    mounted() {
      this.$data.showModal = this.isShow;
    }
  };
</script>

<style lang="scss" scoped>
  .selectbrowser-modal,
  .selectbrowser-modal ul,
  .selectbrowser-modal .mask{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .selectbrowser-modal .mask {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
  }
  .selectbrowser-modal ul {
    z-index: 999;
    width: 100%;
    padding-top: 1rem;
  }
  .selectbrowser-modal ul:after {
    position: fixed;
    top: .4rem;
    right: .4rem;
    z-index: 999;
    content: '';
    display: inline-block;
    width: .8rem;
    height: 1.8rem;
    background: url("./img/guide.png") top right no-repeat;
    background-size: cover;
  }
  .selectbrowser-modal li{
    margin-left: 1rem;
    margin-bottom: .6rem;
    color: #fff;
  }
  .selectbrowser-modal li span:first-child {
    display: inline-block;
    width: .54rem;
    height: .54rem;
    line-height: .54rem;
    border-radius: .54rem;
    text-align: center;
    background: #3984ff;
  }
  .selectbrowser-modal li span:last-child {
    display: inline-block;
    height: .7rem;
    line-height: .7rem;
    padding: 0 .2rem;
    color: #404040;
    border-radius: .1rem;
    background: #fff;
  }
  .selectbrowser-modal li:first-child span:last-child {
    height:.6rem;
    line-height: .6rem;
  }
  .selectbrowser-modal .more {
    width: .5rem;
    vertical-align: middle;
  }
  .selectbrowser-modal .browser {
    height: .5rem;
    margin-top: .1rem;
    margin-right: .1rem;
    vertical-align: top;
  }
</style>
