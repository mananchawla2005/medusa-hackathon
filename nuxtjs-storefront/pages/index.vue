<template>
  <div>
    <div id="header" class="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
      <div class="flex flex-col items-center max-w-screen-2xl mx-auto">
        <div class="w-auto h-full object-center object-cover p-12">
          <h1
            class="my-1 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-transparent"
          >
            YOUR OWN SWAG STORE
          </h1>
          <p class="invisible lg:visible bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold text-center text-xl text-white">
            Get the most expanded variety of colors you can dream of!
          </p>
          <div class="">
            <!-- <InlineSvg :src="require('~/assets/fashiondesign.svg')" class="mt-10 h-80 block" /> -->
            <img src="~/assets/fashiondesign.png" class="block mx-auto w-full md:w-2/3">
          </div>
          <!-- <img
            width="480"
            src="~/assets/header_logo.png"
          > -->
        </div>
        <!-- <div>
          <div
            class="p-9 max-w-sm bg-cyan-900 rounded-2xl border border-gray-600 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">CLAIM YOUR MERCH</h5>
            </a>
            <p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
              Contribute to Medusa and receive free
              merch<br>as a token of our appreciation
            </p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn more
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div> -->
        <!-- <h1 class="text-4xl">
            CLAIM YOUR MERCH
          </h1>
          <p class="mt-2 text-lg font-normal">
            Contribute to Medusa and receive free merch<br>as a token of our appreciation
          </p>
          <button class="btn-ui mt-4 min-w-full lg:min-w-0">
            Learn more
          </button> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- features -->
    <h1 class="font-bold text-2xl text-center md:text-3xl md:mt-12 mb-2 mt-8">
      Why will you <span
        class="text-red-500"
      >Purchase</span> from us?
    </h1>
    <!-- Card Container Start -->
    <div class="flex flex-wrap justify-center">
      <div class="flex flex-col bg-red-300 rounded-lg shadow-md m-12 overflow-hidden w-full md:w-auto max-h-48">
        <img src="~/assets/wool.svg" alt="" class="m-6 lg:h-1/2 h-1/3">
        <h2 class="text-center px-2 text-2xl font-bold">
          100 % Wool Fabric
        </h2>
      </div>
      <div class="flex flex-col bg-red-300 rounded-lg shadow-md m-12 overflow-hidden w-full md:w-auto max-h-48">
        <img src="~/assets/delivery.svg" alt="" class="m-6 lg:h-1/2 h-1/3">
        <h2 class="text-center px-2 text-2xl font-bold">
          Careful Package handling
        </h2>
      </div>
      <div class="flex flex-col bg-red-300 rounded-lg shadow-md m-12 overflow-hidden w-full md:w-auto max-h-48">
        <img src="~/assets/artist.svg" alt="" class="m-6 lg:h-1/2 h-1/3">
        <h2 class="text-center px-2 text-2xl font-bold">
          Wide Range of Colors
        </h2>
      </div>
      <div class="flex flex-col bg-red-300 rounded-lg shadow-md m-12 overflow-hidden w-full md:w-auto max-h-48">
        <img src="~/assets/design.svg" alt="" class="m-6 lg:h-1/2 h-1/3">
        <h2 class="text-center px-2 text-2xl font-bold">
          Constantly Updated Designs
        </h2>
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
              fill="#89959C"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <products-card v-for="product in products" :key="product.id" :item="product" :is-product="true" />
      </div>
    </div>
    <div class="container" />
    <h1 class="font-bold text-2xl text-center md:text-3xl md:mt-8 mb-8 mt-2">
      What our <span
        class="text-red-500"
      >Customers</span> say about us?
    </h1>
    <div class="container mx-auto my-16">
      <div class="md:grid md:grid-cols-4 lg:grid-rows-2 md:gap-5 lg:gap-8 mb-8 m-5">
        <!-- Quote 1 -->
        <blockquote
          class="p-8 rounded-lg bg-blue-700 text-white md:col-span-4 lg:col-span-2"
        >
          <div>
            <div class="flex">
              <img
                class="w-10 block border rounded-full h-full"
                src="~/assets/image-daniel.jpg"
                alt="image-daniel"
              >
              <div class="ml-5">
                <p class="text-lg font-medium">
                  Daniel Clifford
                </p>
              </div>
            </div>
          </div>
          <h2 class="text-xl font-semibold leading-7 my-4">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h2>
          <p class="text-md text-opacity-75 text-gray-300">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </blockquote>

        <!-- Quote 2 -->
        <blockquote
          class="p-8 mt-8 rounded-lg bg-gray-900 text-white md:mt-0 md:col-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-3"
        >
          <div class="flex">
            <img
              class="w-10 block border rounded-full h-full"
              src="~/assets/image-jonathan.jpg"
              alt="image-jonathan"
            >
            <div class="ml-5">
              <p class="text-lg font-medium">
                Jonathan Walters
              </p>
            </div>
          </div>

          <h2 class="text-xl font-semibold leading-7 my-4">
            The team was very supportive and kept me motivated
          </h2>

          <p class="text-md text-gray-300 text-opacity-75">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </blockquote>

        <!-- Quote 3 -->
        <blockquote
          class="p-8 mt-8 rounded-lg bg-gray-50 text-color3 shadow-lg md:mt-0 md:col-span-2 lg:col-span-1"
        >
          <div class="flex">
            <img
              class="w-10 block border rounded-full h-full"
              src="~/assets/image-jeanette.jpg"
              alt=""
            >
            <div class="ml-5">
              <p class="text-lg font-medium">
                Jeanette Harmon
              </p>
            </div>
          </div>

          <h2 class="text-xl font-semibold leading-7 my-4">
            An overall wonderful and rewarding experience
          </h2>

          <p class="text-md">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </blockquote>

        <!-- Quote 4 -->
        <blockquote
          class="bg-pink-900 text-white p-8 mt-8 rounded-lg md:mt-0 md:col-span-4 lg:col-span-2"
        >
          <div class="flex">
            <img
              class="w-10 block border rounded-full h-full"
              src="~/assets/image-patrick.jpg"
              alt="image-patrick"
            >
            <div class="ml-5">
              <p class="text-lg font-medium">
                Patrick Abrams
              </p>
            </div>
          </div>

          <h2 class="text-xl font-semibold leading-7 my-4">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h2>

          <p class="text-md text-gray-300 text-opacity-75">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </blockquote>

        <!-- Quote 5 -->
        <blockquote
          class="p-8 mt-8 rounded-lg bg-gray-50 text-color3 shadow-lg md:mt-0 md:col-span-4 lg:row-start-1 lg:row-end-3 lg:col-start-4 lg:col-end-4"
        >
          <div class="flex">
            <img
              class="w-10 block border rounded-full h-full"
              src="~/assets/image-kira.jpg"
              alt=""
            >
            <div class="ml-5">
              <p class="text-lg font-medium">
                Kira Whittle
              </p>
              <p />
            </div>
          </div>

          <h2 class="text-xl font-semibold leading-7 my-4">
            Such a life-changing experience. Highly recommended!
          </h2>

          <p class="text-md">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
// import InlineSvg from 'vue-inline-svg'

export default {
  name: 'IndexPage',
  // components: {
  //   InlineSvg
  // },
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
  /* background-image: url("~/assets/header_logo2.png"); */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23ff005d' fill-opacity='0.22' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>
