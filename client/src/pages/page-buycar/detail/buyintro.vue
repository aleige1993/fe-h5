
<template>
  <div id="buycar-detail-buyintro" class="buyintro">
    <h1><span>轻松三步，开走新车</span></h1>
    <h2>① 在线预约</h2>
    <p>选中意向车型，在线提交手机号 <br />销售顾问讲在24小时内为您提供1对1服务</p>
    <h2>② 签订合同</h2>
    <p>购车资格评估通过后确定购买车型<br />在线签订购车合同并支付费用</p>
    <h2>③ 坐等提车</h2>
    <p>车辆完成保险、上牌等手续后<br />销售顾问将联系您提车，请保持手机畅通</p>

    <h1><span>购买须知</span></h1>
    <h2>购车资料</h2>
    <p>您只需要提供有效期内的驾驶证，并线上进行资格审核。</p>
    <h2>车辆归属</h2>
    <p>在租赁期间，车辆及车牌抵押或过户给公司，租赁期结束后可过户。</p>
    <h2>购置税</h2>
    <p>购置税额是征收汽车售价（不含税价）的10%，公式为：新车购置税额=购车价格（含税价）÷1.17×%。</p>
    <h2>保险费</h2>
    <p>颂车网送1年保险，包含交强险、第三者责任险30万、车损险、不计免赔险。</p>
    <h2>租金支付</h2>
    <p>提车次月起通过绑定的银行卡按时划扣支付。</p>
    <h2>留购价</h2>
    <p>法律规定，在融资租赁关系终止后，承租人支付租赁物的残值或者合同约定价值之后获得租赁物的所有权。这个支付的价格就是留购价。</p>
  </div>
</template>

<script>
  export default {
    name: 'buyCarDetailBuyIntro',
    data() {
      return {

      };
    }
  };
</script>

<style lang="scss" scoped="">
  .buyintro {
    margin: .4rem;
    line-height: .7rem;
    h1, h2 {
      font-weight: bold;
      color: #313131;
    }
    h1, h1 span {
      position: relative;
      z-index: 99;
    }
    h1 {
      margin-top: .4rem;
      font-size: .44rem;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 1px;
        background: #E5E5E5;
      }
      span {
        padding-right: .2rem;
        background: #fff;
      }
    }
    h2, p{
      margin-left: 1em;
      font-size: .38rem;
    }
    p {
      color: #A0A0A0;
    }
  }
</style>
