<template>
  <div>
    <Head />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Head from '@/components/head.vue'
export default {
  components: {
    Head,
    Footer
  }
}
</script>
