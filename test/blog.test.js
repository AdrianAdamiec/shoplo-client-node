describe('Shoplo blog resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/blog');
    const base = require('./base');
    const BlogResource = require('../resources/blog');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const blogResource = new BlogResource(shopClient);

    it('gets the blog list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/blogs')
            .reply(200, output);

        return blogResource.getBlogs()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the blog', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/blogs/2')
            .reply(200, output);

        return blogResource.getBlogs(2)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the blogs count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/blogs/count')
            .reply(200, output);

        return blogResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new blog', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/blogs', qs.stringify( { 'blog': input } ))
            .reply(201, output);

        return blogResource.createBlog(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a blog', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/blogs/4', qs.stringify({ 'blog': input }))
            .reply(200, output);

        return blogResource.updateBlog(4, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a blog', () => {

        shoplo
            .delete('/services/blogs/4')
            .reply(200, []);

        return blogResource.deleteBlog(4)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
