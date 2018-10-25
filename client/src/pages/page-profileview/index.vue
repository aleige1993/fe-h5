
<template>
  <div id="page-profileview">
      <div class="profilePanl">
          <div class="profileNav">
              <span>资料</span>
          </div>
          <div class="profileMove">
            <li>
              <img src="./img/car_img.png"/>
              <p>这是资料</p>
            </li>
            <li>
              <img src="./img/car_img.png"/>
              <p>这是资料</p>
            </li>
            <li>
              <img src="./img/car_img.png"/>
              <p>这是资料</p>
            </li>
            <li>
              <img src="./img/car_img.png"/>
              <p>这是资料</p>
            </li>
          </div>
      </div>

    <div class="profilePanl">
      <div class="profileNav">
        <span>资料</span>
      </div>
      <div class="profileMove">
        <li>
          <img src="./img/car_img.png"/>
          <p>这是资料这是资料这是资料这是资料这是资料这是资料这是资料这是资料这是资料这是资料这是资料</p>
        </li>
        <li>
          <img src="./img/car_img.png"/>
          <p>这是资料</p>
        </li>
        <li>
          <img src="./img/car_img.png"/>
          <p>这是资料</p>
        </li>
        <li>
          <img src="./img/car_img.png"/>
          <p>这是资料</p>
        </li>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'pageProfileview',
    data() {
      return {};
    },
    methods: {
    },
    mounted() {
    }
  };
</script>

<style lang="scss" scoped>
  #page-profileview{
     .profilePanl{
       padding:0.5rem 0.5rem 0 0.5rem ;
       .profileNav{
         border-bottom: 1px solid #e5e5e5;
         padding-bottom: 0.1rem;
         span{
           font-weight: 600;
           font-size: 0.4rem;
           display: inline-block;
           border-left:5px solid #f00;
           padding-left:0.5rem;
         }
       }
        .profileMove{
          margin:0.2rem 0 0;
          overflow: hidden;
          li{
            display: inline-block;
            width: 48%;
            margin-bottom:0.3rem;
            img{
              width: 100%;
              height:3rem;
            }
            p{
              color: #666;
              font-size: 0.36rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
          li:nth-child(odd){
            float: left;
          }
          li:nth-child(even){
            float: right;
          }
        }
     }


  }

</style>
