<template>
  <div class="container mx-auto p-8">
    <div class="w-full border-b border-ui-medium pb-6 mb-2 lg:mb-6 flex items-center justify-between">
      <h1 class="font-semibold text-3xl">
        Your Wishlist
      </h1>
    </div>

    <div v-if="items.length" class="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
      <products-card v-for="item in items" :key="item.product.id" :item="item.product" :is-product="false" />
    </div>
    <div v-else>
      <br>
      <p class="text-gray-500">Try adding some items in the wishlist!</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WishlistPopoverItem',
  //   props: {
  //     item: {
  //       type: Object,
  //       default () {
  //         return {
  //           id: '1',
  //           title: 'Medusa Tote',
  //           thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png'
  //         }
  //       }
  //     }
  //   },
  computed: {
    ...mapGetters({ items: 'wishlist_items' })
  }
}
</script>
