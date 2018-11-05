<template>
  <div id="supportBank" class="support-bank">
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <th>银行名称</th>
        <th v-if="view === 'app'">银行代码</th>
        <th v-if="view === 'in'">单笔限额</th>
        <th v-if="view === 'in'">支付渠道</th>
      </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0">
      <tr v-for="list in bankList">
        <td v-text="list.bankName"></td>
        <td v-if="view === 'app'" v-text="list.bankCode"></td>
        <td v-if="view === 'in'" v-text="list.bankLimit"></td>
        <td v-if="view === 'in'" v-text="list.payChannel"></td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'supportBank',
    data() {
      return {
        bankList: []
      };
    },
    props: {
      view: {
        type: String,
        required: false,
        default: 'app'
      }
    },
    async mounted() {
      let res = await this.$http.get('h5/app/getBankList', {});
      if (res.success) {
        this.$data.bankList = res.body;
      }
//      let res = await this.$formdata.post('/openapi/common/banks/support', {});
//      if (res.success) {
//        this.$data.bankList = res.data;
//      }
    }
  };
</script>
<style lang="scss" scoped="">
  .support-bank {
    table {
      width: 100%;
      table-layout: fixed;
      border-top: 1px solid #eee;
      background: #fff;
      &:first-child {
        position: fixed;
        top: 0;
        left: 0;
      }
      &:last-child {
        margin-top: 1.2rem;
      }
    }
    th, td {
      width: 50%;
      height: 1.2rem;
      padding: 0 .2rem;
      text-align: center;
      border-bottom: 1px solid #eee;
      &:first-child {
        border-right: 1px solid #eee;
      }
    }
  }
</style>
