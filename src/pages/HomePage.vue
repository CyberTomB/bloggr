<template>
  <div class="card-columns">
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
export default {
  components: { BlogCard },
  name: 'Home'
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
