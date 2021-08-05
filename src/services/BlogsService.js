import { AppState } from '../AppState'
import { api } from './AxiosService'

class BlogsService {
  async getAllBlogs() {
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data
  }
}

export const blogsService = new BlogsService()
