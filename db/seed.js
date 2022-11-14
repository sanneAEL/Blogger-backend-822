const blogs = require('./seeds.json');
const Blog = require('../models/Blog');

Blog.insertMany(blogs)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => process.exit());
