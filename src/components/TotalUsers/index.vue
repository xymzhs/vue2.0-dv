<template>
  <common-card title="累计用户数" value="1,087,503,000">
    <template>
      <vue-echarts :options="getOptions" />
      <!-- <div id="total-users-chart" :style="{width:'100%',height:'100%'}" /> -->
    </template>
    <template v-slot:footer>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">8.53%</span>
          <div class="increase" />
        </div>
        <div class="compare-month">
          <span>月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [commonCardMixin],
  computed: {
    getOptions() {
      return {
        yAxis: {
          type: "category",
          show: false,

          boundaryGap: false
        },
        xAxis: {
          type: "value",
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        series: [
          {
            type: "bar",
            data: [180],
            stack: "总量",
            itemStyle: {
              color: "#ff9800"
            }
          },
          {
            type: "bar",
            data: [250],
            stack: "总量",
            barWidth: "10",
            itemStyle: {
              color: "#eee"
            }
          },
          {
            type: "custom",
            data: [180],
            stack: "总量",
            barWidth: "10",
            renderItem: (params, api) => {
              const value = api.value(0);
              const endPoint = api.coord([value, 0]);
              return {
                // type:"path",
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d:
                        "M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: "cover"
                    },
                    style: {
                      fill: "#ff9800"
                    }
                  },
                  {
                    type: "path",
                    shape: {
                      d:
                        "M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: "cover"
                    },
                    style: {
                      fill: "#ff9800"
                    }
                  }
                ]
                // shape:{
                //   d:'M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z',
                //   x:0,
                //   y:0,
                //   width:20,
                //   height:20
                // },
                // style:{
                //   color:'red'
                // }
              };
            }
          }
        ]
      };
    }
  }
  // mounted() {
  //   const chartDom = document.getElementById("total-users-chart");
  //   const charts = this.$echarts.init(chartDom);
  //   charts.setOption({
  //     yAxis: {
  //       type: "category",
  //       show: false,

  //       boundaryGap: false
  //     },
  //     xAxis: {
  //       type:"value",
  //       show: false
  //     },
  //     grid: {
  //       top: 0,
  //       left: 0,
  //       right: 0,
  //       bottom: 0
  //     },
  //     series: [
  //       {
  //         type: "bar",
  //         data: [
  //           180,
  //         ],
  //         stack:"总量",
  //         itemStyle:{
  //           color:"#ff9800"
  //         }
  //       },
  //       {
  //         type: "bar",
  //         data: [
  //           250,
  //         ],
  //         stack:"总量",
  //         barWidth: "10",
  //         itemStyle:{
  //           color:"#eee"
  //         }
  //       },
  //       {
  //         type: "custom",
  //         data: [
  //           180,
  //         ],
  //         stack:"总量",
  //         barWidth: "10",
  //         renderItem:(params,api)=>{
  //           const value = api.value(0)
  //           const endPoint = api.coord([value,0])
  //           return {
  //             // type:"path",
  //             type:"group",
  //             position:endPoint,
  //             children:[{
  //                 type:"path",
  //                 shape:{
  //                 d:'M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z',
  //                 x:-5,
  //                 y:10,
  //                 width:10,
  //                 height:10,layout:'cover'
  //                 },
  //                 style:{
  //                   fill:'#ff9800'
  //                 },

  //             },
  //             {
  //               type:"path",
  //               shape:{
  //               d:'M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z',
  //               x:-5,
  //               y:-20,
  //               width:10,
  //               height:10,layout:'cover'
  //             },
  //             style:{
  //               fill:'#ff9800'
  //             }
  //             }
  //             ]
  //             // shape:{
  //             //   d:'M512 6.4C505.6 0 492.8 0 480 0s-25.6 0-32 6.4c-12.8 6.4-19.2 19.2-25.6 25.6L6.4 761.6c-12.8 19.2-12.8 44.8 0 64 6.4 12.8 12.8 12.8 25.6 19.2s19.2 6.4 32 6.4h819.2c12.8 0 25.6 0 32-6.4 12.8-6.4 19.2-12.8 25.6-19.2 12.8-19.2 12.8-44.8 0-64L537.6 32C531.2 25.6 524.8 12.8 512 6.4z',
  //             //   x:0,
  //             //   y:0,
  //             //   width:20,
  //             //   height:20
  //             // },
  //             // style:{
  //             //   color:'red'
  //             // }
  //           }
  //         }
  //       }
  //     ]
  //   });
  // }
};
</script>


<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  .compare {
    margin-top: 3px;
    font-size: 12px;
    display: flex;
    text-align: center;
    color: #666;
  }
  .compare-month {
    margin-top: 3px;
    font-size: 12px;
    display: flex;
    text-align: center;
    color: #666;
    margin-left: 1em;
  }
}
</style>




<svg t="1593311053213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1201" width="200" height="200"><path d="M535.466667 812.8l450.133333-563.2c14.933333-19.2 2.133333-49.066667-23.466667-49.066667H61.866667c-25.6 0-38.4 29.866667-23.466667 49.066667l450.133333 563.2c12.8 14.933333 34.133333 14.933333 46.933334 0z" p-id="1202" fill="#1afa29"></path></svg>