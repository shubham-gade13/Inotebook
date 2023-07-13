import React from 'react'

import { useContext,useState } from 'react'
import notecontext from "../context/notes/noteContext"; 
import "./allcss/NoteItem.css"

const Notesitem = (props) => {
    const context=useContext(notecontext);
   const {deletenote}=context;

    const {note,updatenote}=props;
  return (
    <div className="col-md-4">

        
        <div className="card my-3" >
  <div className="card-body">
       
        <h4 className="card-title">{note.title}</h4>
    <p className="card-text">{note.description}</p>
    <div className="icons">
    <i className="fa-solid fa-trash mx-2"onClick={()=>{deletenote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>

    </div>
  </div>
</div>
    </div>
  )
}

export default Notesitem