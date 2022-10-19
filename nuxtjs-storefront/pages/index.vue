<template>
  <div>
    <div class="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12" id="header">
      <div class="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">
        <div class="w-auto h-full object-center object-cover p-12">
          <img width="480"
            src="~/assets/header_logo.png">
        </div>
        <div>
          <div
            class="p-9 max-w-sm bg-cyan-900 rounded-2xl border border-gray-600 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">CLAIM YOUR MERCH</h5>
            </a>
            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">Contribute to Medusa and receive free
              merch<br>as a token of our appreciation</p>
            <a href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Learn more
              <svg aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          <!-- <h1 class="text-4xl">
            CLAIM YOUR MERCH
          </h1>
          <p class="mt-2 text-lg font-normal">
            Contribute to Medusa and receive free merch<br>as a token of our appreciation
          </p>
          <button class="btn-ui mt-4 min-w-full lg:min-w-0">
            Learn more
          </button> -->
        </div>
      </div>
    </div>

    <div v-if="products.length" class="container mx-auto px-8 py-16">
      <div class="flex items-center justify-between mb-6">
        <p class="text-2xl font-semibold text-gray-800">
          Featured
        </p>
        <nuxt-link class="text-ui-dark flex items-center" to="/products">
          <span class="mr-2 text-gray-500">Browse all products</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
              fill="#89959C" />
          </svg>
        </nuxt-link>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <products-card v-for="product in products" :key="product.id" :item="product" :is-product="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      products: [{
        id: 1,
        title: 'Medusa Coffee Mug',
        thumbnail: '',
        variants: [{ prices: [{ amount: 0, currency_code: 'usd' }] }]
      }]
    }
  },
  async fetch () {
    try {
      const { products } = await this.$axios.$get('/products')
      this.products = products.splice(0, 4)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('The server is not responding')
    }
  }
}
</script>

<style>
.btn-ui {
  @apply py-2 px-4 bg-ui-dark text-white text-sm font-medium rounded-md shadow;
  @apply focus: outline-none focus:ring-2 focus:ring-ui-dark focus:ring-opacity-75 disabled:bg-ui-medium;
}
#header {
  background-image: url("~/assets/svg.png");
}
</style>
