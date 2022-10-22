<template>
  <div>
    <div v-for="option in filteredOptions" :key="option.id" class="mt-6">
      <div class="text-sm">
        <p class="font-medium mb-2">
          {{ option.title }}
        </p>
        <div>
          <button
            v-for="value in option.values"
            :key="value.id"
            :style="computeColor(value.value)"
            :class="[(value.value === currentOptions[option.id] ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'), computeClassColor(value.value), computeClassHover(value.value, option)]"
            class="inline-flex items-center justify-center rounded-sm text-xs h-12 w-12 mr-2 last:mr-0 hover:bg-gray-500 hover:text-white"
            @click="updateOption(option.id, value.value )"
          >
            {{ value.value }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductOptions',
  props: {
    options: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      currentOptions: { }
    }
  },
  computed: {
    filteredOptions () {
      return this.options.map((option) => {
        option.values = option.values.reduce((acc, curr) => {
          if (!acc.find(val => val.value === curr.value)) {
            return [...acc, { ...curr }]
          }
          return acc
        }, [])

        return option
      })
    }
  },
  watch: {
    options (val) {
      this.currentOptions = val.reduce((acc, curr) => {
        return { ...acc, [curr.id]: curr.values[0].value }
      }, {})
      const findHash = JSON.stringify(Object.values(this.currentOptions)[1]).replaceAll('"', '')
      // console.log(JSON.stringify(Object.values(this.currentOptions)[1]).replaceAll('"', ''))
      this.$emit('updateSelectedOptions', this.currentOptions)
      if (findHash.startsWith('#')) {
        // console.log('yes it does')
        this.$emit('updateSelectedColor', findHash)
      }
    }
  },
  methods: {
    updateOption (optionId, value) {
      // console.log(JSON.stringify(this.options))
      this.currentOptions[optionId] = value
      this.$emit('updateSelectedOptions', this.currentOptions)
      if (value.startsWith('#')) {
        this.$emit('updateSelectedColor', value)
      }
    },
    computeColor (val) {
      // console.log(val)
      if (val.startsWith('#')) {
        return `background-color: ${val}; color: ${val};`
      } else {
        return ''
      }
    },
    computeClassColor (val) {
      if (val.startsWith('#')) {
        return 'hover:border hover:border-red-500'
      } else {
        return ''
      }
    },
    computeClassHover (val, option) {
      if (val.startsWith('#')) {
        // console.log(val === this.currentOptions[option.id])
        return val === this.currentOptions[option.id] ? 'border-spacing-2 border-red-500' : ''
      } else {
        return ''
      }
    }
  }
}
</script>
