<template>
  <div class="container">
    <h2>{{ product.title }}</h2>
    <hr />

    <div v-html="product.description"></div>
    Price: <s>S/.{{ product.regular_price }}</s>
    <br />
    <strong>S/. {{ product.price }}</strong>
    <br />
    <br />
    <div v-html="product.price_html"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $api, params }) {
    const product = await $api.$get(
      `https://food.legacyrules.com/wp-json/wc/v3/products/${params.id}`
    );

    return { product };
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
