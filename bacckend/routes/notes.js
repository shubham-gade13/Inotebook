 const express=require('express');
 const router=express.Router();
const Note=require('../model/Note');
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


 //route 1:get all the notes
 router.get('/fetchallnotes',fetchuser,async(req,res)=>
 {
    try {
        const notes =await Note.find({user:req.user.id});
        res.json(notes);
    
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error occure");
    }
    

 })

// router 2 :add anew note using post

 router.post('/addnote',fetchuser,[
    body('title','enter a valid title').isLength({min:4}),
    body('description','add valid description').isLength({min:4})
      
 ],async(req,res)=>
 { 
    try {
        
  
const {title,description,tag}=req.body;
const errors=validationResult (req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note=new Note({
        title,description, tag,user:req.user.id
      })
      const savednote =await note.save();

    res.json(savednote);
} catch (error) {
    console.log(error.message);
 res.status(500).send("internal server error occure");
 
 }


 })

 //route :3 update note

 router.put('/updatenote/:id',fetchuser,async(req,res)=>
 { 
    
        try
        {

            
            const {title,description,tag}=req.body;
            
            const newNote={};
            if(title)
            {
                newNote.title=title;
            }
            if(description)
            {
                newNote.description=description;
            }
            if(tag)
            {
                newNote.tag=tag;
            } 
            
            //find the note to be updated
            let note= await Note.findById(req.params.id);
            if(!note)
            {
                return res.status(404).send("not found");
            }
            
            if(note.user.toString()!==req.user.id)
            {
                return res.status(401).send("not allowed");
                
            }
            
            note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
            res.json({note});
        }catch (error) {
            console.log(error.message);
            res.status(500).send("internal server error occure");
        }
        
    
            
            
            
            
        })
        
        
        
        //delete note
        router.delete('/deletenote/:id',fetchuser,async(req,res)=>
 { 

//find the note to be deleted
try{

    let note= await Note.findById(req.params.id);
    if(!note)
    {
        return res.status(404).send("not found");
    }
    
    if(note.user.toString()!==req.user.id)
{
    return res.status(401).send("not allowed");
    
}

note=await Note.findByIdAndDelete(req.params.id);
res.json({"succes":"note has been deleted suceessfully",note:note});

}catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error occure");
}





})
module.exports=router;
