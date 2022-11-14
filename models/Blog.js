const mongoose = require('../db/connection');

const BlogSchema = new mongoose.Schema({
	title: String,
	content: String,
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
