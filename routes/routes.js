// Import necessary modules and dependencies
import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

// Sample data arrays
let users = [];
let posts = [];
let comments = [];

// Users CRUD routes
router.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = uuidv4();
  users.push(newUser);
  res.json(newUser);
});

router.get('/users', (req, res) => {
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const deletedUser = users.find(u => u.id === userId);
  users = users.filter(u => u.id !== userId);

  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Posts CRUD routes
router.post('/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = uuidv4();
  posts.push(newPost);
  res.json(newPost);
});

router.get('/posts', (req, res) => {
  res.json(posts);
});

router.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts.find(p => p.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

router.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;

  const index = posts.findIndex(p => p.id === postId);

  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

router.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;

  const deletedPost = posts.find(p => p.id === postId);
  posts = posts.filter(p => p.id !== postId);

  if (deletedPost) {
    res.json(deletedPost);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Comments CRUD routes
router.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = uuidv4();
  comments.push(newComment);
  res.json(newComment);
});

router.get('/comments', (req, res) => {
  res.json(comments);
});

router.get('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const comment = comments.find(c => c.id === commentId);

  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

router.put('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const updatedComment = req.body;

  const index = comments.findIndex(c => c.id === commentId);

  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    res.json(comments[index]);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

router.delete('/comments/:id', (req, res) => {
  const commentId = req.params.id;

  const deletedComment = comments.find(c => c.id === commentId);
  comments = comments.filter(c => c.id !== commentId);

  if (deletedComment) {
    res.json(deletedComment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

export default router;
