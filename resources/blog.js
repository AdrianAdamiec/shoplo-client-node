class BlogResource {

    /**
     * Create a BlogResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getBlogPath(id) {
        if (id) {
            return `/services/blogs/${id}`;
        }
        return '/services/blogs';
    }

    static getBlogCountPath() {
        return '/services/blogs/count';
    }

    getBlogs(id, params){
        return this.shoploClient.get(BlogResource.getBlogPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(BlogResource.getBlogCountPath(), params);
    }

    createBlog(blog){
        return this.shoploClient.create(BlogResource.getBlogPath(null), {blog:blog});
    }

    updateBlog(id, blog){
        return this.shoploClient.update(BlogResource.getBlogPath(id), {blog:blog});
    }

    deleteBlog(id){
        return this.shoploClient.delete(BlogResource.getBlogPath(id), null);
    }
}

module.exports = BlogResource;