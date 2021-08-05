<template>
  <h3>{{ comment.body }}</h3>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
