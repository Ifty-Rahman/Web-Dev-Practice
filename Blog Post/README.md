# Blog Web Application

A modern, responsive blog application built with Node.js, Express.js, and EJS. This application allows users to create, view, edit, and delete blog posts with a beautiful, mobile-friendly interface.

## Features

- ✅ **Post Creation**: Create new blog posts with title, author, and content
- ✅ **Post Viewing**: View all posts on the home page with previews
- ✅ **Individual Post View**: Read full blog posts with detailed view
- ✅ **Post Editing**: Edit existing posts with form validation
- ✅ **Post Deletion**: Delete posts with confirmation dialog
- ✅ **Responsive Design**: Beautiful UI that works on desktop and mobile
- ✅ **Modern Styling**: Clean, professional design with smooth animations
- ✅ **Error Handling**: Proper error pages and form validation

## Technical Stack

- **Backend**: Node.js with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
Blog Post/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── README.md            # This file
├── views/               # EJS templates
│   ├── layout.ejs       # Main layout template
│   ├── index.ejs        # Home page template
│   ├── new.ejs          # New post form template
│   ├── post.ejs         # Individual post view template
│   ├── edit.ejs         # Edit post form template
│   └── error.ejs        # Error page template
└── public/              # Static assets
    └── css/
        └── style.css    # Main stylesheet
```

## Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd "Blog Post"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   Or start the production server:
   ```bash
   npm start
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

## Usage

### Creating a New Post
1. Click the "New Post" button in the navigation or on the home page
2. Fill in the title, author, and content fields
3. Click "Create Post" to save

### Viewing Posts
- All posts are displayed on the home page with previews
- Click "Read More" to view the full post
- Posts are sorted by creation date (newest first)

### Editing a Post
1. Navigate to any post
2. Click the "Edit" button
3. Modify the content as needed
4. Click "Update Post" to save changes

### Deleting a Post
1. Navigate to any post
2. Click the "Delete Post" button
3. Confirm the deletion in the dialog

## API Endpoints

- `GET /` - Home page (all posts)
- `GET /new` - New post form
- `POST /posts` - Create new post
- `GET /posts/:id` - View individual post
- `GET /posts/:id/edit` - Edit post form
- `POST /posts/:id` - Update post
- `POST /posts/:id/delete` - Delete post

## Data Storage

This application uses in-memory storage, which means:
- Posts are stored in the server's memory
- Data will be lost when the server restarts
- No database setup is required
- Perfect for development and testing

## Customization

### Styling
The application uses a modern design with:
- Gradient backgrounds
- Smooth hover animations
- Responsive grid layout
- Professional typography

You can customize the appearance by modifying `public/css/style.css`.

### Adding Features
The modular structure makes it easy to add new features:
- Add new routes in `index.js`
- Create new EJS templates in `views/`
- Extend the CSS for new components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

To run the application in development mode with auto-restart:
```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

## License

This project is open source and available under the MIT License.
