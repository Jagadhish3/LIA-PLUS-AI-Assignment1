const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new post
router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, createdBy: req.user._id });
    await post.save();
    res.status(201).json(post);
});

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('createdBy', 'name');
    res.json(posts);
});

module.exports = router;
