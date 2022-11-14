const express = require('express');
const router = express.Router();
// import the bookmark model
const Blog = require('../models/Blog');

// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
	Blog.find({})
		.then((blogs) => res.json(blogs))
		.catch(next);
});

// show
router.get('/:id', async (req, res, next) => {
	try {
		const blogs = await Blog.findById(req.params.id);
		res.json(blogs);
	} catch (err) {
		next(err);
	}
});

// create
router.post('/', async (req, res, next) => {
	try {
		const newBlog = await Blog.create(req.body);

		res.status(201).json(newBlog);
	} catch (err) {
		next(err);
	}
});

// put
router.put('/:id', async (req, res, next) => {
	try {
		const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(201).json(updatedBlog);
	} catch (err) {
		next(err);
	}
});
// delete
router.delete('/:id', async (req, res, next) => {
	try {
		const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
		res.json(deletedBlog);
	} catch (err) {
		next(err);
	}
});
module.exports = router;
