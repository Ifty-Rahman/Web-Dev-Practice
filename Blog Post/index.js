const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for blog posts (will reset on server restart)
let posts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    content: 'This is my first blog post. Welcome to my new blog where I\'ll be sharing my thoughts and experiences.',
    author: 'Blog Owner',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Getting Started with Node.js',
    content: 'Node.js is a powerful JavaScript runtime that allows you to build scalable server-side applications. In this post, I\'ll share some tips for getting started.',
    author: 'Blog Owner',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

let nextId = 3;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Routes

// Home page - display all posts
app.get('/', (req, res) => {
  res.render('index', { 
    posts: posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    title: 'My Blog'
  });
});

// Create new post page
app.get('/new', (req, res) => {
  res.render('new', { title: 'Create New Post' });
});

// Handle post creation
app.post('/posts', (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content || !author) {
    return res.status(400).render('new', { 
      title: 'Create New Post',
      error: 'All fields are required',
      formData: req.body
    });
  }

  const newPost = {
    id: nextId++,
    title: title.trim(),
    content: content.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  posts.push(newPost);
  res.redirect('/');
});

// View individual post
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).render('error', { 
      title: 'Post Not Found',
      message: 'The requested post could not be found.'
    });
  }
  res.render('post', { post, title: post.title });
});

// Edit post page
app.get('/posts/:id/edit', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).render('error', { 
      title: 'Post Not Found',
      message: 'The requested post could not be found.'
    });
  }
  res.render('edit', { post, title: 'Edit Post' });
});

// Handle post update
app.post('/posts/:id', (req, res) => {
  const { title, content, author } = req.body;
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).render('error', { 
      title: 'Post Not Found',
      message: 'The requested post could not be found.'
    });
  }

  if (!title || !content || !author) {
    return res.status(400).render('edit', { 
      post: posts[postIndex],
      title: 'Edit Post',
      error: 'All fields are required'
    });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title: title.trim(),
    content: content.trim(),
    author: author.trim(),
    updatedAt: new Date().toISOString()
  };

  res.redirect(`/posts/${postId}`);
});

// Delete post
app.post('/posts/:id/delete', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).render('error', { 
      title: 'Post Not Found',
      message: 'The requested post could not be found.'
    });
  }

  posts.splice(postIndex, 1);
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog server is running on http://localhost:${PORT}`);
});
