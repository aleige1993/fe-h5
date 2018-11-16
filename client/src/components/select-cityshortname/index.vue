
<template>
  <ul class="cityshortname">
    <li :class="{active: item === shortName}"
        v-for="item in this.$store.getters.cityShortName"
        @click="selectShortName(item)">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'cityShortName',
    data() {
      return {
        shortName: ''
      };
    },
    props: {
      name: {
        type: String,
        default: '',
        required: false
      }
    },
    methods: {
      selectShortName(name) {
        this.$data.shortName = name;
        this.$emit('on-select', name);
      }
    },
    mounted() {
      this.$data.shortName = this.name;
    }
  };

</script>

<style lang="scss" scoped="">
  .cityshortname {
    padding: .24rem .1rem;
    background: #F4F4F4;
    li {
      display: inline-block;
      width: 1.2rem;
      height: 1.1rem;
      margin: .2rem;
      line-height: 1.1rem;
      text-align: center;
      background: #fff;
      &.active {
        color: #fff;
        background: #3984FF;
      }
    }
  }
</style>
