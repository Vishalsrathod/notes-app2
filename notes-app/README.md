# Notes App - MERN Stack

A full-stack note-taking application built with MongoDB, Express, React, and Node.js (MERN stack). Keep track of your thoughts and ideas in one place.

## Features

- ✏️ **Create Notes** - Add new notes with title and description
- 🔍 **Search** - Find notes by searching through titles and descriptions
- ✏️ **Edit Notes** - Update existing notes anytime
- 🗑️ **Delete Notes** - Remove notes you don't need
- 🗄️ **MongoDB Database** - Notes are stored in MongoDB
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Real-time Updates** - Changes reflect immediately

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- React 18
- Axios
- CSS3

## Project Structure

```
notes-app/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── noteController.js     # Business logic
├── models/
│   └── Note.js              # Note schema
├── routes/
│   └── noteRoutes.js        # API routes
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── index.css
├── server.js                # Main server file
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud - MongoDB Atlas)

## Installation

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd notes-app
```

### 2. Install backend dependencies
```bash
npm install
```

### 3. Install frontend dependencies
```bash
cd frontend
npm install
cd ..
```

### 4. Setup environment variables
Create a `.env` file in the root directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notes-app
NODE_ENV=development
```

For MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notes-app
```

### 5. Start MongoDB
If using local MongoDB:
```bash
mongod
```

## Running the Application

### Option 1: Run both server and client together
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend on `http://localhost:3000`

### Option 2: Run separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

## API Endpoints

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |
| GET | `/api/notes/search?query=...` | Search notes |

### Example Requests

**Create Note:**
```bash
POST /api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "description": "This is my first note"
}
```

**Update Note:**
```bash
PUT /api/notes/60d5ec49c1234567890abc
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description"
}
```

## Usage

1. **Create a Note**
   - Enter a title and description
   - Click "Add Note" button
   - Your note appears in the list

2. **Search Notes**
   - Use the search box
   - Search works with titles and descriptions
   - Results update in real-time

3. **Edit a Note**
   - Click "Edit" button on any note
   - Modify the content
   - Click "Update Note"

4. **Delete a Note**
   - Click "Delete" button
   - Confirm deletion
   - Note is removed permanently

## Building for Production

### Build Frontend
```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/build` folder.

### Deploy to Production

1. Set proper environment variables
2. Use a process manager like PM2 for Node.js:
```bash
npm install -g pm2
pm2 start server.js
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- For MongoDB Atlas, check network access and IP whitelist

### Port Already in Use
```bash
# Find and kill process on port 5000
lsof -i :5000
kill -9 <PID>
```

### Frontend Can't Connect to Backend
- Check that backend is running on port 5000
- Check CORS settings in server.js
- Check proxy setting in frontend/package.json

## Future Improvements

- Add user authentication
- Add categories/tags for notes
- Dark mode theme
- Export notes as PDF
- Collaborative editing
- Note syncing across devices

## License

This project is open source and available under the MIT License.

## Author

Created for learning MERN stack development.

---

Happy Note Taking! 📝
