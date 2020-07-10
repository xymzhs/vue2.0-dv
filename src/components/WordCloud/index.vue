<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"></ve-wordcloud>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
      }
      return {
        chartData: {
          columns: ['word', 'count'],
          rows: getRows()
        }
      }
    }
  }

  function getRows () {
    return [{
      'word': '麦当劳',
      'count': 22199
    }, {
      'word': '牛肉面',
      'count': 10288
    }, {
      'word': '粉蒸肉',
      'count': 620
    }, {
      'word': '鱼头汤',
      'count': 274470
    }, {
      'word': '肥肠鸡',
      'count': 12311
    }]
  }
</script>