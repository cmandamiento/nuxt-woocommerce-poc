<template>
  <div class="container">
    <h2>Products</h2>
    <hr />
    <div v-for="product in products" :key="product.id" class="product">
      {{ product.name }}
      <br />
      Price: {{ product.regular_price }}
      <nuxt-link :to="'/products/' + product.id">view detail</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const products = await $api.$get(
      `https://food.legacyrules.com/wp-json/wc/v3/products`
    );

    return { products };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.product {
  border: 1px solid red;
}
</style>
