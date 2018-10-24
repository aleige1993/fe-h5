<template>
  <div id="limitAssessment" class="limit-assessment">
    <div class="progress-bar"><span id="progressBar"></span></div>
    <div v-if="iShow" class="list">
      <h1>{{step + 1}}.{{currentList.secondLevelTarget}}</h1>
      <ul>
        <template v-for="(option, index) in currentList.memberScoreDTOList">
          <li @click="selectItem(index)" :class="{radio: true, active: option.active}">
            {{option.scoreName}}
          </li>
        </template>
      </ul>
      <div class="prev" v-if="step !== 0" @click="prevQuestion">上一题</div>
      <div @click="submitForm" class="buttons" v-if="step === resultList.length - 1 && submit">
        <div class="submit">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'limitAssessment',
    data() {
      return {
        iShow: false,
        resultList: [],
        currentList: {},
        step: 0,
        formData: {
          memberNo: '',
          chooseItems: []
        },
        submit: false
      };
    },
    methods: {
      showQuestion() {
        this.$data.currentList = this.$data.resultList[this.$data.step];
        document.getElementById('progressBar').style.width = (this.$data.step + 1) / this.$data.resultList.length * 100 + '%';
      },
      prevQuestion() {
        this.showQuestion(--this.$data.step);
      },
      selectItem(itemIndex) {
        let memberScoreDTOList = this.$data.resultList[this.step].memberScoreDTOList;
        this.$data.resultList[this.step].memberScoreDTOList = memberScoreDTOList.map((item, index) => {
          if (index === itemIndex) {
            item.active = true;
            this.$data.formData.chooseItems[this.step] = item;
            if (this.$data.step < this.$data.resultList.length - 1) {
              let _this = this;
              setTimeout(function() {
                _this.showQuestion(++_this.$data.step);
              }, 100);
            }
            if (this.$data.step === this.$data.resultList.length - 1) {
              this.submit = true;
            }
          } else {
            item.active = false;
          }
          return item;
        });
      },
      async submitForm() {
        if (window.jsApi) {
          this.$data.formData.memberNo = window.jsApi.getNums();
        }
        if (!this.$data.formData.memberNo) {
          layer.open({
            content: '请先登录',
            skin: 'msg',
            time: 2, // 2秒后自动关闭
            tips: [2]
          });
        } else {
          let index = layer.open({
            type: 2,
            content: '额度估计中，请稍后...'
          });
          let resp = await this.$http.post('/h5/app/memberTargetMoneyResult', this.$data.formData);
          if (resp.success) {
            layer.close(index);
            this.$router.push({
              path: '/creditlimlt/result',
              query: {
                money: resp.body.money
              }
            });
          }
        }
      }
    },
    async mounted() {
      let resp = await this.$http.get('/h5/app/memberTarget', {});
      if (resp.success) {
        this.$data.iShow = true;
        this.$data.resultList = resp.body.resultList;
        this.showQuestion();
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "style.scss";
</style>

