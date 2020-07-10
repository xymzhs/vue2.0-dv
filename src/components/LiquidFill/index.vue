<template>
  <!-- <div id="container"></div> -->
  <ve-liquidfill :data="chartData" height="100%" :settings="settings" />
</template>

<script>
// import "echarts-liquidfill";
export default {
  data() {
    return {
      settings: {
        seriesMap: {
          rate: {
            radius: "80%",
            label: {
              // formatter:function(v){
              //     return v
              // }
            },
            textStyle: {
              fontSize: 14,
              fontWeight: "normal",
              color: "#999"
            }
          }
        },
        outline:{
            itemStyle:{
                borderColor:"#eee"
            }
        }
      },
      chartData: {
        columns: ["title", "percent"],
        rows: [
          {
            title: "rate",
            percent: 0.6
          }
        ]
      }
    };
  },
  mounted() {
    // const charts = this.$echarts.init(document.getElementById("container"));
    // charts.setOption({
    //   series: [
    //     {
    //       type: "liquidFill",
    //       data: [0.6],
    //       label: {
    //         show: true,
    //         color: "#294D99",
    //         insideColor: "#fff",
    //         fontSize: 14,
    //         fontWeight: "bold",
    //         align: "center",
    //         baseline: "middle",
    //         position: "inside"
    //       }
    //     }
    //   ]
    // });
  }
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
}
</style>