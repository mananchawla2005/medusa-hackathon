<template>
  <div>
    <nuxt-link :to="`/products/${item.id}`">
      <div
        class="group relative border border-gray-200 rounded-lg"
      >
        <div class="w-full min-h-auto bg-pink-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-auto lg:aspect-none">
          <div class="w-auto h-auto object-center object-cover">
            <img
              alt=""
              :src="item.thumbnail"
              class="border-b-2 border-black"
            >
            <div class="bg-pink-200">
              <h3 class="text-black font-extrabold text-lg m-5">
                {{ item.title }}
              </h3>
              <p v-if="isProduct" class="text-lg font-semibold  m-5">
                Starting from {{ formatPrice(lowestPrice.amount, lowestPrice.currency_code) }}
              </p>
              <button v-if="isProduct" class="btn-ui !rounded-4xl !shadow-lg !bg-pink-900 !text-lg !m-5">
                Go to Product
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="flex justify-between bg-blue-900 rounded-b-lg">
          <h3 class="text-sm text-white font-normal m-2">
            {{ item.title }}
          </h3>
          <p v-if="isProduct" class="text-sm font-semibold text-gray-300 m-2">
            from {{ formatPrice(lowestPrice.amount, lowestPrice.currency_code) }}
          </p>
        </div> -->
      </div>
    </nuxt-link>
    <p v-if="!isProduct" class="text-sm font-semibold text-red-500 m-2">
      <button @click="toggleWishlist()">
        Remove
      </button>
    </p>
  </div>
</template>

<script>
import { formatPrice } from '~/utils/format-price'

export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
      default () {
        return {
          id: 1,
          title: 'Medusa Coffee Mug',
          thumbnail: '',
          variants: [{ prices: [{ amount: 0 }] }]
        }
      }
    },
    isProduct: Boolean
  },
  computed: {
    lowestPrice () {
      return this.item.variants
        .reduce((prices, cur) => {
          return [...prices, ...cur.prices.filter(price => price.currency_code === this.$store.getters['cart/cartCurrencyCode'])]
        }, [])
        .sort((a, b) => a.amount - b.amount)[0] || { amount: 1, currency_code: 'usd' }
    }
  },
  methods: {
    formatPrice,
    async toggleWishlist () {
      const [item] = this.$store.state.wishlist.items.filter(i => i.product_id === this.item.id)
      await this.$store.dispatch('removeWishItem', item.id)
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
    .lg\:h-product {
        height: 40rem/* 384px */;
    }
}
</style>
