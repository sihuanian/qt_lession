<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} -- {{product.price | currency}}
      <button @click="addProductToCart(product)">add to cart</button>
    </li>
  </ul>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ])
}
</script>

<style scoped>

</style>