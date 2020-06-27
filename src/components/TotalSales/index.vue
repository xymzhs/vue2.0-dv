<template>
  <common-card
    title="累计销售额"
    value="$ 32,039,165"
  >
  
  <template>
      <div class="compare"></div>
  </template>
    <template v-slot:footer>
        <div>
            <span>昨日销售额</span>
            <span class="money">$ 30,000,000</span>
        </div>
        
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "../../mixins/commonCardMixin"
export default {
    mixins: [commonCardMixin]
}
</script>

<style>
    span{
        font-size: 12px;
    }
    .compare{
        height:100%;
        background-color: yellow;
    }
    .money{
        margin-left: 5px;
        color: #333;
        font-weight: 700;
    }
</style>