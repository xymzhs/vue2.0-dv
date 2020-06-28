<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <vue-echarts :options="searchUserOptions" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <vue-echarts :options="searchNumberOptions" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排行"></el-table-column>
                <el-table-column prop="keyword" label="关键字"></el-table-column>
                <el-table-column prop="count" label="总搜索量"></el-table-column>
                <el-table-column prop="user" label="搜索用户量"></el-table-column>
              </el-table>
              <el-pagination
                :total="100"
                :current-page="1"
                :page-size="5"
                @current-change="onCurrentChange"
                layout="prev,pager,next"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="samll">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <vue-echarts :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioSelect: "品类",
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: "ZARA",
          count: 112,
          user: 40,
          range: "40%"
        },
        {
          id: 2,
          rank: 2,
          keyword: "AJ",
          count: 100,
          user: 90,
          range: "90%"
        },
        {
          id: 3,
          rank: 3,
          keyword: "麦当劳",
          count: 754,
          user: 20,
          range: "70%"
        },
        {
          id: 4,
          rank: 4,
          keyword: "北京",
          count: 100,
          user: 55,
          range: "55%"
        },
        {
          id: 5,
          rank: 5,
          keyword: "屈臣氏",
          count: 41,
          user: 41,
          range: "100%"
        }
      ],
      searchUserOptions: {
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [
          {
            type: "line",
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: "#81c784"
            },
            lineStyle: {
              color: "#388e3c"
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      searchNumberOptions: {
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 400
        },
        series: [
          {
            type: "line",
            data: [
              100,
              50,
              200,
              201,
              100,
              61,
              44,
              57,
              150,
              78,
              65,
              99,
              142,
              138,
              84,
              345,
              21,
              245,
              120
            ],
            areaStyle: {
              color: "#81c784"
            },
            lineStyle: {
              color: "#388e3c"
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      categoryOptions: {
        title: [{}]
      }
    };
  },
  mounted(){
      this.renderPieChart()
  },
  methods: {
    onCurrentChange(page) {},
    renderPieChart() {
      const mockData = [
        { legendName: "粉面粥店", value: 10, percent: "10.00%",
        itemStyle:{
            color:'#fbd46d'
        } },
        { legendName: "早茶店", value: 20, percent: "20.00%",
        itemStyle:{
            color:"#f3c623"
        } },
        { legendName: "牛排店", value: 30, percent: "30.00%",
        itemStyle:{
            color:"#cf7500"
        } },
        { legendName: "蛋糕店", value: 15, percent: "15.00%",
        itemStyle:{
            color:"#10375c"
        } },
        { legendName: "西餐店", value: 5, percent: "5.00%",itemStyle:{
            color:"#436f8a"
        } },
        { legendName: "越菜店", value: 20, percent: "20.00%",
        itemStyle:{
            color:"#111d5e"
        } },
      ];
      this.categoryOptions = {
          title:[{
              text:'品类分布',
              textStyle:{
                  fontSize:14,
                  color:'#666'
              },
              left:20,
              top:20
          },
          {
              text:'累计订单量',
              subtext:'320',
              x:'34.5%',
              y:'42.5%',
              textAlign:'center',
              textStyle:{
                  fontSize:14,
                  color:'#999'
              },
              subtextStyle:{
                  fontSize:28,
                  color:'#333'
              },
          }],
          series:[
              {
                type:'pie',
                data:mockData,
                label:{
                    normal:{
                        show:true,
                        position:'outter',
                        formatter:function(params){
                            return params.data.legendName
                        }
                    }
                },
                center:['35%','50%'],
                radius:['45%','60%'],
                labelLine:{
                    normal:{
                        length:5,
                        length2:3,
                        smooth:true
                    }
                },
                clockwise:true
              }
          ]
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    flex: 1;
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      height: 452px;
      flex-direction: column;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            letter-spacing: 2px;
            font-weight: 500;
            color: #333;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>