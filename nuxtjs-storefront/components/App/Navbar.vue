<template>
  <div class="sticky top-0 z-20">
    <header class="relative bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" :class="{ 'navbar--hidden': !showNavbar }">
      <nav class="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div class="flex items-center">
          <app-logo />
          <div class="hidden lg:flex lg:items-center">
            <div class="hidden flex-grow items-center justify-center lg:flex text-sm font-medium">
              <nuxt-link
                to="/"
                class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 last:mr-0"
              >
                Home
              </nuxt-link>
              <nuxt-link
                to="/products"
                class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 last:mr-0"
              >
                Products
              </nuxt-link>
              <nuxt-link
                to="/about"
                class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-black hover:text-gray-900 last:mr-0"
              >
                About
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-end ">
          <div class="flex">
            <dropdowns-regions />
          </div>
          <dropdowns-wishlist-popover />
          <dropdowns-cart-popover />
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
<style>
.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
