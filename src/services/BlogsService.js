import { AppState } from '../AppState'
import { api } from './AxiosService'

class BlogsService {
  async getAllBlogs() {
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data
  }

  async getBlogById(id) {
    const res = await api.get('/api/blogs/' + id)
    AppState.activeBlog = res.data
  }
}

export const blogsService = new BlogsService()
