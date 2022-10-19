<template>
  <div class="relative inline-block text-left">
    <div id="wishlistButton">
      <button
        v-click-outside="showWishlist"
        class="inline-flex items-center justify-center w-full py-2 text-sm font-medium hover:opacity-1/2 text-white hover:text-gray-200"
        @click="showWishlist = !showWishlist"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 256 256" class="mr-2">
          <path fill="white"
              d="M128 220.2a13.6 13.6 0 0 1-9.9-4.1L35 133a58 58 0 0 1 2.2-84.2a56.5 56.5 0 0 1 41.6-14a62.8 62.8 0 0 1 40.3 18.3L128 62l11-11a57.9 57.9 0 0 1 84.1 2.2a56.2 56.2 0 0 1 14.1 41.6a62.8 62.8 0 0 1-18.3 40.3l-81 81a13.6 13.6 0 0 1-9.9 4.1Zm5.6-8.3ZM75 46.7a44 44 0 0 0-29.7 11.1a45.8 45.8 0 0 0-1.8 66.7l83.1 83.1a1.9 1.9 0 0 0 2.8 0l81-81c18.2-18.2 19.9-47.5 3.8-65.3a45.8 45.8 0 0 0-66.7-1.8l-15.3 15.2a6.1 6.1 0 0 1-8.5 0l-13.1-13.1A50.3 50.3 0 0 0 75 46.7Z">
          </path>
      </svg>
        <span>{{ countItems }}</span>
      </button>
    </div>

    <div
      v-if="showWishlist"
      id="wishlistPopover"
      class="origin-top-right absolute right-0 mt-2 w-96 px-6 py-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <div v-if="items.length === 0" class="flex justify-center">
          <p>Your wishlist is empty </p>
        </div>

        <div v-else>
          <ul class="py-2 first:pt-0 space-y-3">
            <dropdowns-wishlist-popover-item v-for="item in items" :key="item.id" :item="item" />
          </ul>
        </div>
        <div>
          <nuxt-link to="/wishlist">
            <button class="text-ui-dark py-2 text-sm w-full border px-3 py-1.5 rounded hover:text-black hover:bg-gray-100" v-if="items.length">
              View Wish List
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WishlistPopover',
  data () {
    return {
      showWishlist: false
    }
  },
  computed: {
    ...mapGetters({ items: 'wishlist_items' }),
    countItems () {
      console.log(this.items)
      return this.items.length
    }
  }
}
</script>
