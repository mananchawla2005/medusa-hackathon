<template>
    <nuxt-link :to="`/products/${item.id}`">
        <div className="flex hover:bg-gray-100">
            <div className="overflow-hidden rounded-md mr-4">
                <img className="w-16 h-auto" :src=item.thumbnail :alt=item.title />
            </div>
            <div className="flex items-center">
                <div>
                    <p className="font-medium text-sm">{{ item.title }}</p>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
  
<script>
export default {
    name: 'WishlistPopoverItem',
    props: {
        item: {
            type: Object,
            default() {
                return {
                    id: "1",
                    title: "Medusa Tote",
                    thumbnail: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
                }
            }
        }
    }
}
</script>
