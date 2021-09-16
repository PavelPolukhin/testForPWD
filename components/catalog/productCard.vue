<template>
  <div class="card">
    <div class="card-img">
      <img :src="require(`~/assets/images/catalog/recommended/${data.img}.png`)" alt="">
    </div>
    <div class="card__price" v-if="data.oldPrice">
      <div class="card__price-new">{{ data.price }} ₽</div>
      <div class="card__price-old">{{ data.oldPrice }} ₽</div>
    </div>
    <div class="card-price" v-else>{{ data.price }} ₽</div>
    <div class="card-title">{{ cutText(data.title, 110) }}</div>
    <div class="card-action">
      <el-button type="primary" @click="addBucket(data)" v-if="numberOfProducts === 0">В корзину</el-button>
      <div class="numberOfProducts" v-else>
        <div class="numberOfProducts-minus" @click="reduceOnBucket(data)">
          <img src="@/assets/images/catalog/recommended/minus.svg" alt="">
        </div>
        <div class="numberOfProducts-count">{{numberOfProducts}} шт</div>
        <div class="numberOfProducts-plus" @click="increaseOnBucket(data)">
          <img src="@/assets/images/catalog/recommended/plus.svg" alt="">
        </div>
      </div>
    </div>
    <div class="card__favourite">
      <div class="card__favourite-active" @click="deleteFavorites(data.id)" v-if="isFavorites">
        <img src="@/assets/images/catalog/recommended/favoritesA.svg" alt="">
      </div>
      <div class="card__favourite-inactive" @click="addFavorites(data)" v-else>
        <img src="@/assets/images/catalog/recommended/favoritesI.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      isFavorites: false,
      numberOfProducts: 0,
    }
  },
  methods: {
    addFavorites(item) {
      this.$store.commit('catalog/favourites/addFavorites', item);
      this.isFavorites = true;
    },
    deleteFavorites(id) {
      this.$store.commit('catalog/favourites/deleteFavorites', id);
      this.isFavorites = false;
    },
    cutText(text, symbolsCount) {
      return text.length > symbolsCount
        ? text.slice(0, symbolsCount - 3) + '...'
        : text;
    },
    addBucket(item) {
      this.numberOfProducts = 1;
      item.numberOfProducts = this.numberOfProducts
      this.$store.commit('catalog/bucket/addBucket', item);
    },
    increaseOnBucket(item){
      ++this.numberOfProducts;
      item.numberOfProducts = this.numberOfProducts;
      this.$store.commit('catalog/bucket/changeBucket', item);
    },
    reduceOnBucket(item){
      --this.numberOfProducts;
      item.numberOfProducts = this.numberOfProducts;
      this.$store.commit('catalog/bucket/changeBucket', item);
    }
  }
}
</script>
