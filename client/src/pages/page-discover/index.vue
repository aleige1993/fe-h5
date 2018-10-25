
<template>
  <div id="page-discover">
      <nav class="nav-hader">
        <!--<li class="active"><span>头条</span></li>-->
        <li :class="{ 'active': active === index }"  v-for="(item,index) in haderList" @click="changeHead(item.id,index)" ><span>{{item.name}}</span></li>
        <!--<li><span>导航</span></li>-->
        <!--<li><span>用车</span></li>-->
      </nav>
      <section>
        <div id="refreshContainer" class="mui-content mui-scroll-wrapper">
          <div class="mui-scroll">
            <!--数据列表-->
            <div class="discover-panl" v-if="columnList.length>0">
              <div class="car-list" v-for="item in columnList" @tap="getOpenUrl(item.url)">
                <div class="carInfo">
                  <img :src="item.coverPhotoUrl"/>
                  <div class="p-test">
                    <p class="p-title">{{item.title}}</p>
                    <!--<p class="p-conten">这辆合资车SUV月薪5000就能买好开又 实用这辆合资车SUV月薪5000就能买好开又 实用</p>-->
                  </div>
                </div>
              </div>
            </div>
            <div  class="refresh" v-if="Refresh||columnList.length === 0">{{columnList.length>0?'...我是有底线的...':'暂无数据...'}}</div>
          </div>
          <!--<div v-if="Refresh" class="mui-pull-bottom-pocket mui-block mui-visibility">-->
            <!--<div class="mui-pull">-->
              <!--<div class="mui-pull-caption mui-pull-caption-nomore">{{columnList.length>0?'...我是有底线的...':'暂无数据...'}}</div>-->
            <!--</div>-->
          <!--</div>-->

        </div>
      </section>
  </div>
</template>

<script>
  export default {
    name: 'pageDiscover',
    data() {
      return {
        haderList: [],
        active: 0,
        columnList: [],
        currentPage: 1,
        pageSize: 2,
        id: '',
        Count: '',
        Refresh: ''
      };
    },
    methods: {
      async getColumnList() {
        let res = await this.$http.post(this.$config.HTTPCMSURL + '/column/columnList', { isUsed: 1 });
        this.$data.haderList = res.body.rows;
        this.$data.id = res.body.rows[0].id;
        this.getHeadlineList();
      },
      async getHeadlineList() {
        let req = {
          terminal: 1,
          appType: 1,
          isUsed: 1,
          currentPage: this.$data.currentPage,
          pageSize: this.$data.pageSize,
          columnType: this.$data.id
        };
        let res = await this.$http.post(this.$config.HTTPCMSURL + '/headline/headlineList', req);
        if (res.success) {
          this.$data.columnList = this.$data.columnList.concat(res.body.rows);
          this.$data.Refresh = this.$data.columnList.length === 0 ? true : false;
          this.$data.Count = this.pageCount(res.body.count, this.$data.pageSize);
        }
      },
      changeHead(id, index) {
        this.$data.active = index;
        this.$data.columnList = [];
        this.$data.id = id;
        this.$data.currentPage = 1;
        mui('#refreshContainer').pullRefresh().scrollTo(0, 0, 100);
        this.getHeadlineList();
      },
      getOpenUrl(url) {
        console.log(url);
        this.$bridge.callhandler('toFindDetail', url);
      },
      pageCount(count, limit) { //获取总页数
        return count > 0 ? ((count < limit) ? 1 : ((count % limit) ? (parseInt(count / limit) + 1) : (count / limit))) : 0;
      }
    },
    mounted() {
      let _this = this;
      document.body.style.backgroundColor = '#eeeeee';
      mui.init({
        pullRefresh: {
          container: '#refreshContainer',
          down: {
            callback: function() {
              _this.$data.currentPage = 1;
              _this.$data.columnList = [];
              _this.getHeadlineList();
              setTimeout(() => {
                mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
              }, 500);
            }
          },
          up: {
            contentnomore: '...我是有底线的...',
            callback: function() {
              if (_this.$data.currentPage <= _this.$data.Count) {
                _this.$data.currentPage ++;
                _this.getHeadlineList();
                setTimeout(() => {
                  mui('#refreshContainer').pullRefresh().endPullupToRefresh();
                }, 500);
              } else {
                _this.$data.Refresh = true;
                setTimeout(() => {
                  mui('#refreshContainer').pullRefresh().endPullupToRefresh();
                }, 500);
              }
            }
          }
        }
      });
      _this.getColumnList();
    }
  };
</script>

<style lang="scss" scoped>
    .mui-scroll-wrapper{
      margin-top:1.4rem;
    }
    .nav-hader{
      width:100%;
      height:1.2rem;
      background-color:#3984FF;
      li{
        float: left;
        width: 25%;
        text-align: center;
        margin-top:0.35rem;
        span{
          display: block;
          width: 100%;
          color: #CBDFFF;
          border-right: 1px solid #77ABFF;
        }
      }
      li:last-child span{
        border-right: 0;
      }
      li.active{
        font-weight: 600;
        span{
          color: #fff;
        }
      }
    }

    .discover-panl{
      background-color: #fff;
     .car-list{
      padding:0.5rem;
       border-bottom: 1px solid #EEEEEE;
     }
      .carInfo{
        display: flex;
        img{
          width: 35%;
          height: 2.2rem;
        }
        .p-test{
          flex: 1;
          margin-left:0.25rem;
          p.p-title{
            color:#313131;
            font-size:0.32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 600;
          }
          p.p-conten{
            margin-top:0.15rem;
            color:#A0A0A0;
            font-size:0.32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  .refresh{
    text-align: center;
    line-height:1rem;
    font-weight: bold;
    color: #777;
  }

</style>
