<template>
  <common-card title="累计订单量" value="$ 2,157,420">
    <template>
        <vue-echarts :options="getOptions"/>
      <!-- <div id="total-oder-chart" :style="{width:'100%',height:'100%'}"/> -->
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">$ 2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin"
export default {
    mixins:[commonCardMixin],
    computed:{
        getOptions(){
            return {
                xAxis:{
                    type:'category',
                    show:false,
                    boundaryGap:false
                },
                yAxis:{
                    show:false
                },
                grid:{
                    top:0,
                    left:0,
                    right:0,
                    bottom:0
                },
                series:[{
                    type:'line',
                    data:[620,432,220,534,790,430,220,320,552,320,834,690,530,220,620],
                    areaStyle:{
                        color:'purple'
                    },
                    lineStyle:{
                        width:0
                    },
                    itemStyle:{
                        opacity:0
                    },
                    smooth:true
                }]
            }
        }
    },
    // mounted(){
    //     const chartDom = document.getElementById('total-oder-chart')
    //     const charts  = this.$echarts.init(chartDom)
    //     charts.setOption({
            
    //         xAxis:{
    //             type:'category',
    //              show:false,
    //              boundaryGap:false
    //         },
    //         yAxis:{
    //             show:false
    //         },
    //         grid:{
    //             top:0,
    //             left:0,
    //             right:0,
    //             bottom:0
    //         },
    //         series:[{
    //             type:'line',
    //             data:[620,432,220,534,790,430,220,320,552,320,834,690,530,220,620],
    //             areaStyle:{
    //                 color:'purple'
    //             },
    //             lineStyle:{
    //                 width:0
    //             },
    //             itemStyle:{
    //                 opacity:0
    //             },
    //             smooth:true
    //         }]
    //     })
    // }
}
</script>
