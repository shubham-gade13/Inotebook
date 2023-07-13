import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>
{
  const host="http://localhost:5000"
  const initialnotes=[];

  // eslint-disable-next-line 
   const [notes, setnotes] = useState(initialnotes)

   //Get all notes
   const getnotes=async()=>
   {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      }
    
    });
const json = await response.json();

    console.log(json);
    setnotes(json);

 
   }

   //Add note
   const addnote=async(title,description,tag)=>
   {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
       
      body: JSON.stringify({title,description,tag}) 
    });
    
    const note=await response.json();
    setnotes(notes.concat(note))

   }

   //delete notes
   const deletenote=async(id)=>
   {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
       
     
    });
    const json= response.json(); 
    const newnotes=notes.filter((note)=>{return note._id!==id})
    setnotes(newnotes);

   } 

   //edit notes
   
   const editnote=async(id, title,description ,tag)=>
   {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
         
        body: JSON.stringify({title,description,tag}) 
      });
      const json= await response.json(); 
      console.log(json);
      let newnotes=JSON.parse(JSON.stringify(notes))

      for(let index=0;index<newnotes.length;index++)
      {
        const element=newnotes[index];
        if(element._id=== id)
        {
          newnotes[index].title=title;
          newnotes[index].description=description;
          newnotes[index].tag=tag;
          break;

        }
      }
        setnotes(newnotes);
    }

   return (
    <NoteContext.Provider  value={{notes,addnote,deletenote,editnote,getnotes}}>
      initial{props.children}
    </NoteContext.Provider>
)
}

export default NoteState;
 
