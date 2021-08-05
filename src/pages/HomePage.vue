<template>
  <div class="card-columns">
    <BlogCard v-for="b in blogs" :key="b.id" :blog="b" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import BlogCard from '../components/BlogCard.vue'
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState'
export default {
  components: { BlogCard },
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getAllBlogs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
