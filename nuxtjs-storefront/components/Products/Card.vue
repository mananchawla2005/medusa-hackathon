<template>
  <div>
    <nuxt-link :to="`/products/${item.id}`">
      <div
        class="group relative border border-gray-400 rounded-lg"
      >
        <div class="w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <div class="w-auto h-full object-center object-cover bg-cyan-100">
            <img
              alt=""
              :src="item.thumbnail"
            >
          </div>
        </div>
        <div class="flex justify-between bg-blue-900 rounded-b-lg">
          <h3 class="text-sm text-white font-normal m-2">
            {{ item.title }}
          </h3>
          <p class="text-sm font-semibold text-gray-300 m-2">
            from {{ formatPrice(lowestPrice.amount, lowestPrice.currency_code) }}
          </p>
        </div>
      </div>
    </nuxt-link>
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
    }
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
    formatPrice
  }
}
</script>
