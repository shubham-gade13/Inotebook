import React from 'react'
import { useContext ,useEffect,useRef,useState} from 'react'
import notecontext from "../context/notes/noteContext";
import Addnote from './Addnote';
import Notesitem from './Notesitem';
import { useNavigate } from "react-router-dom";
import "./allcss/Notes.css"
const Notes = () => {
  const fetcher =useNavigate();
    const context=useContext(notecontext);
    
    const {notes,getnotes,editnote}=context;
useEffect(() => {
  if(localStorage.getItem('token'))
  {
    getnotes() 
  }
  else{
    fetcher("/login");
  }
}, [])
const ref = useRef(null)
const refclose = useRef(null)


    const [note, setnote] = useState({ id:"", etitle:"",edescription:"",etag:"default"})


const updatenote=(currentnote)=>
{
ref.current.click();

setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
}


const handleclick=(e)=>
{
  
  editnote(note.id,note.etitle,note.edescription,note.etag)
  refclose.current.click();
    e.preventDefault();

}
const onChange=(e)=>
{
   setnote({...note,[e.target.name]:e.target.value})
} 
  return (
    <>
      <Addnote/>
    
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">edit note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
              <form>
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label">title</label>
            <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={5} required/>
              </div>
          <div className="mb-3"> 
            <label htmlFor="edescription" className="form-label">description</label>
            <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3"> 
            <label htmlFor="etag" className="form-label">tag</label>
            <input type="text" className="form-control" id="etag" name="etag"  value={note.etag} onChange={onChange} minLength={5} required/>
          </div>
          
              </form>
      </div>
      <div className="modal-footer">
        <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<4 || note.edescription.length<4}  onClick={handleclick} type="button" className="btn btn-primary">update note</button>
      </div>
    </div>
  </div>
</div>
<div className="allnotes">

        <div className="row my-3" id="">
                     <h2 className='text-light text-center my-4'>Your Notes</h2>
                      <div className="Container">
                        {notes.length===0 && "no notes to display"}
                        </div>
                     {notes.map((note)=>
                     {
                       return <Notesitem key={note._id} updatenote={updatenote} note={note} />
                       
                       
                      })}    
        </div>
        
 </div>
  
                      </>
  )
}

export default Notes