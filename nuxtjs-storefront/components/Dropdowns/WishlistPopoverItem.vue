<template>
    <nuxt-link :to="`/products/${item.product_id}`">
        <div class="flex hover:bg-gray-100">
            <div class="overflow-hidden rounded-md mr-4">
                <img class="w-16 h-auto" :src=item.product.thumbnail :alt=item.product.title />
            </div>
            <div class="flex items-center">
                <div>
                    <p class="font-medium text-sm">{{ item.product.title }}</p>
                </div>
            </div>
        </div>
        <br>
    </nuxt-link>
</template>
<script>
export default {
  name: 'WishlistPopoverItem',
  props: {
    item: {
      type: Object,
      default () {
        return {
          id: '1',
          title: 'Medusa Tote',
          thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png'
        }
      }
    }
  },
  computed: {
    countItem () {
      console.log(this.item)
      return this.item
    }
  }
}
</script>
