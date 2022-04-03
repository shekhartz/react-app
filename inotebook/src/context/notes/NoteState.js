import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62249b0b73494fd399a59e247",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566155299",
            "__v": 0
        },
        {
            "_id": "62249b0c7349w4f399a59e249",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566156657",
            "__v": 0
        },
        {
            "_id": "62249b0b73494f39h9a59e247",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566155299",
            "__v": 0
        },
        {
            "_id": "62249b0c7349d4f399a59e249",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566156657",
            "__v": 0
        },
        {
            "_id": "62249b0b73494f399a59e247",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566155299",
            "__v": 0
        },
        {
            "_id": "62249b0c73494f399a59e249",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": "My Title",
            "description": "Wake up Sid",
            "tag": "personal",
            "date": "1646566156657",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "62249b0c73494f399a59e249",
            "user": "6224797afb0eaa7aa9b8a116",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1646566156657",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id)=>{
        console.log("Deleting note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

    }

    // Edit a Note
    const editNote = (id, title, description, tag)=>{
        
    }


    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;