import React from 'react'
import { useContext,useState } from 'react'
import notecontext from "../context/notes/noteContext";
import "./allcss/Addnote.css"

const Addnote = () => {
    const context=useContext(notecontext);
    // eslint-disable-next-line 
    const {addnote}=context;
 const [note, setnote] = useState({title:"",description:"",tag:""})
    const handleclick=(e)=>
    {
        e.preventDefault();
        addnote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""})
        alert("Note added sucessful");

    }
    const onChange=(e)=>
    {
       setnote({...note,[e.target.name]:e.target.value})
    } 
  return (
    <div>
        <div className='container my-4' id="addnotepage">
          <h1 className="my-4 text-light">Add Note</h1>
      <form className="addnoteform">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
      </div>
  <div className="mb-3"> 
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description}  onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3"> 
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag"  value={note.tag} onChange={onChange} minLength={5} required/>
  </div>
 <div className="addnotebutton">
  <button disabled={note.title.length<4 || note.description.length<4} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>

 </div>
</form>


  
    </div>  
    </div>
  )
}

export default Addnote