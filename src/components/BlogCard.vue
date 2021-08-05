<template>
  <div class="card my-2 action" style="width: 18rem;">
    <img v-if="blog.imgUrl" :src="blog.imgUrl" class="card-img-top" :alt="blog.title">
    <div class="card-body">
      <h5 class="card-title text-center">
        {{ blog.title }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>
