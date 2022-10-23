<template>
  <footer>
    <div class="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 px-4 pt-24 pb-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
      <div class="flex items-center">
        <nuxt-link class="mr-3 last:mr-0 text-ui-dark hover:text-gray-700" to="/about">
          About Us
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <a href="https://www.github.com/mananchawla2005" class="mr-3 last:mr-0 text-ui-dark hover:text-gray-700">GitHub</a>
        <a href="https://www.twitter.com/_manan2005" class="mr-3 last:mr-0 text-ui-dark hover:text-gray-700">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
