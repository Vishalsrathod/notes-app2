import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);

  // Fetch all notes from API
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/notes');
      setNotes(response.data.data);
      setError('');
    } catch (error) {
      console.error('Error fetching notes:', error);
      setError('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  // Search notes
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query === '') {
      fetchNotes();
    } else {
      try {
        const response = await axios.get(`/api/notes/search?query=${query}`);
        setNotes(response.data.data);
      } catch (error) {
        console.error('Error searching notes:', error);
      }
    }
  };

  // Add or update note
  const handleAddNote = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      setError('Please fill in both title and description');
      return;
    }

    try {
      setLoading(true);
      
      if (editingId) {
        // Update note
        await axios.put(`/api/notes/${editingId}`, {
          title,
          description
        });
        setEditingId(null);
      } else {
        // Create new note
        await axios.post('/api/notes', {
          title,
          description
        });
      }

      setTitle('');
      setDescription('');
      setError('');
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
      setError('Failed to save note');
    } finally {
      setLoading(false);
    }
  };

  // Delete note
  const handleDeleteNote = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        setLoading(true);
        await axios.delete(`/api/notes/${id}`);
        fetchNotes();
        setError('');
      } catch (error) {
        console.error('Error deleting note:', error);
        setError('Failed to delete note');
      } finally {
        setLoading(false);
      }
    }
  };

  // Edit note
  const handleEditNote = (id) => {
    const noteToEdit = notes.find(note => note._id === id);
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDescription(noteToEdit.description);
      setEditingId(id);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setTitle('');
    setDescription('');
    setEditingId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>My Notes</h1>
          <p>Keep track of your thoughts and ideas</p>
        </header>

        {error && <div className="error-message">{error}</div>}

        <form className="form" onSubmit={handleAddNote}>
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-title"
            disabled={loading}
          />
          <textarea
            placeholder="Note Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-description"
            disabled={loading}
          />
          <div className="form-buttons">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Loading...' : editingId ? 'Update Note' : 'Add Note'}
            </button>
            {editingId && (
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handleCancelEdit}
                disabled={loading}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-box"
        />

        <div className="notes-count">
          {notes.length} note{notes.length !== 1 ? 's' : ''} found
        </div>

        <div className="notes-list">
          {notes.length > 0 ? (
            notes.map(note => (
              <div key={note._id} className="note-card">
                <h2 className="note-title">{note.title}</h2>
                <p className="note-date">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <p className="note-description">{note.description}</p>
                <div className="note-buttons">
                  <button
                    className="btn btn-edit"
                    onClick={() => handleEditNote(note._id)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-delete"
                    onClick={() => handleDeleteNote(note._id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-notes">
              {loading ? 'Loading...' : 'No notes yet. Create your first note!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
