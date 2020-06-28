<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{padding:'0 0 20px 0'}">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="0">销售额</el-menu-item>
            <el-menu-item index="1">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              class="sales-view-date-picker"
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              size="small"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sale-view-chart-wrapper">
          <vue-echarts :options="chartOption" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class=".list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div
                  class="list-item-no"
                  :class="['list-item-no', +item.no <=3?'top-no':'']"
                >{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankNames:['',"麦当劳","麦当劳","麦当劳","麦当劳","麦当劳","麦当劳","麦当劳"],
      rankData: [1, 2, 3, 4, 5, 6, 7].map(v => ({
        no: v,
        name: "麦当劳",
        money: "233,245"
      })),
      chartOption: {
          title:{
              text:"年度销售额",
              textStyle:{
                  fontSize:12,
                  color:'#666'
              },
              left:25,
              top:20
          },
          xAxis:{
              type:'category',
              data:[1,2,3,4,5,6,7,8,9,10,11,12].map(v=>v+'月'),
              axisTick:{
                  alignWithLabel:true,
                  lineStyle:{
                  color:'#999'
                    }, 
              },
              axisLine:{
                  lineStyle:{
                      color:'#999'
                  }
              },
              axisLabel:{
                  color:'#333'
              }
             
              
          },
          yAxis:{
              axisLine:{
                  show:false
              },
              axisTick:{
                  show:false
              },
              splitLine:{
                  lineStyle:{
                      type:'dotted',
                      color:"#eee"
                  }
              }
          },
          series:[{
              type:'bar',
              barWidth:'40%',
              data:[200,250,300,350,300,270,200,250,300,350,300,270]
          }],
          color:['#3f51b5'],
          grid:{
              top:70,
              left:60,
              right:60,
              bottom:50
          }
      },
      activeIndex: "0",
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90);
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .sales-view-menu {
      width: 100%;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sale-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .list-item-wrapper {
        margin-top: 15px;
      }
      .list-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;
        .top-no {
          background: #000;
          border-radius: 50%;
          color: #fff;
          font-weight: 500;
        }
        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: "#333";
        }
        .list-item-name {
          margin-left: 10px;
          color: #333;
        }
        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
    }
  }
}
</style>