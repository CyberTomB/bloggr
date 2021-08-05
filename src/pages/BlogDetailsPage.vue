<template>
  <div class="container-fluid job-details-page">
    <div class="row my-2">
      <div class="col-md-6">
        <div class="card">
          <img v-if="blog.imgUrl" :src="blog.imgUrl" class="card-img-top" :alt="blog.title">
          <div class="card-body">
            <div class="card-title text-center">
              <p><b>{{ blog.title }}</b></p>
            </div>
            <p>
              {{ blog.body }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div v-if="comments !== []">
          <Comment v-for="c in comments" :key="c.id" :comment="c" />
        </div>
        <div class="card-body border-top col-12">
          <form onsubmit="app.commentsController.createComment('${this.id}')" class="row" action="">
            <small>Comment:</small>
            <div class="input-group">
              <textarea name="body" class="form-control" aria-label="With textarea"></textarea>
              <button class="btn btn-secondary" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import { commentsService } from '../services/CommentsService'
import { AppState } from '../AppState'
import Comment from '../components/Comment.vue'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getBlogById(route.params.id)
        await commentsService.getAllCommentsByBlogId(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments)
    }
  },
  components: {
    Comment
  }
}
</script>
