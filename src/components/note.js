import React from 'react';
import Axios from 'axios';

const Note = ({ note, reloadNotes }) => {
    const handleDelete = () => {
        Axios.post ('/api/delete-note', { id: note._id }).then(reloadNotes);
    }

    return (
        <>
            <p>{note.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default Note;