<template>
  <div class="card my-2" style="width: 18rem;">
    <img src="https://picsum.photos/200" class="card-img-top" alt="https://picsum.photos/200">
    <div class="card-body">
      <h5 class="card-title">
        {{ blog.title }}
      </h5>
      <p class="card-text">
        {{ blog.body }}
      </p>
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
    return {}
  }
}
</script>
