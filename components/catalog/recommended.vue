<template>
  <div class="recommended">
    <h2>С этим товаром покупают</h2>
    <el-row class="cards-list" :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="item in productCards" :key="item.id">
        <product-card :data="item"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProductCard from "./productCard";

export default {
  name: 'recommended',
  components: {ProductCard},
  computed: {
    productCards() {
      return this.$store.state.catalog.productCards.recommendedData
    }
  }
}
</script>
