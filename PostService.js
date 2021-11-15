import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
  async create(post, picture) {
    const fileName = await FileService.saveFile(picture)
    const createdPost = await Post.create({...post, picture: fileName})
    return createdPost
  }

  async getAll() {
    const posts = await Post.find()
    return posts
  }

  async getOne(id) {
    if (!id) throw new Error('id не указан')
    const post = await Post.findById(id)
    return post
  }

  async update(post) {
    if (!post._id) throw new Error('id не указан')
    const updatedPost = await Post.findOneAndUpdate(post._id, post, {new: true})
    return updatedPost
  }

  async delete(id) {
    if (!id) throw new Error('id не указан')
    const deletedPost = await Post.findByIdAndDelete(id)
    return deletedPost
  }
}

export default new PostService()
