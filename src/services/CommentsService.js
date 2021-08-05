import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentsService {
  async getAllCommentsByBlogId(id) {
    const res = await api.get('/api/blogs/' + id + '/comments/')
    AppState.comments = res.data
  }

  // async create(id){
  //   const res = await api.
  // }
}

export const commentsService = new CommentsService()
