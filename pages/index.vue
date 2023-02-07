<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <br />
    <br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Confira 🔥</h1>
      <br />
      <ProductSlider :products="products" />
      <br /><br /><br />
      <Newsletter />
    </v-container>
    <Footer />
    <ScroolTop />
  </div>
</template>

<script>
import Newsletter from "~/components/Newsletter.vue";
export default {
  components: { Newsletter },
  async created() {
    this.sale_items = await this.$content("products")
      .where({ onSale: true })
      .fetch();
    this.products = await this.$content("products").fetch();
  },
  data() {
    return {
      products: null,
      sale_items: null,
    };
  },
};
</script>
