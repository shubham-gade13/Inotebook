const express=require('express');
const router=express.Router();
const User=require('../model/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRETE="harryisagoodboy";

const { body, validationResult } = require('express-validator');



router.post ('/createuser',[
   body('name','enter a valid name').isLength({min:4}),
   body('password','password must be 4 char').isLength({min:4}),
   body('email','enter a valid email').isEmail()
], async (req,res)=>
{
let sucess=false;

//if there are erros then return bdreaquest and erroes
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({errors: errors.array() });
   }
//check user exist
try{

   let user=await User.findOne({email:req.body.email});
   if(user)
   {
      return res.status(400).json({sucess,error:"sorry user with this email already exist"});
   }
   const salt=await bcrypt.genSalt(10);
  const  secPass= await bcrypt.hash(req.body.password,salt);

   user =await  User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email
   })

   const data={
      user:{
         id:user.id
      }
   }
     const authtoken=jwt.sign(data,JWT_SECRETE);
    

   //.then(user => res.json(User));
   sucess=true;

   res.json({sucess,authtoken});
}catch(error)
{
console.log(error.message);
res.status(500).send("some arror occure");

}
   
})

//AUTHENTICATE THE LOGIN
router.post ('/login',[
   body('email','enter a valid email').isEmail(),
   body('password','password can not be blank').exists()
], async (req,res)=>
{
   let success=false;
   
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

const {email,password}=req.body;
try {
   let user=await User.findOne({email});
   if(!user)
   {success=false;
      return res.status(400).json({error:"fill correct credentials"});

   }
   const passwordcompare=await bcrypt.compare(password,user.password);
if(!passwordcompare)
{
   success=false;

   return res.status(400).json({ success,error:"fill correct credentials"});
}
const data={
   user:{
      id:user.id
   }
}
const authtoken=jwt.sign(data,JWT_SECRETE);
success=true;
res.json({success,authtoken});

} catch (error) {
   console.log(error.message);
res.status(500).send("internal server error occure");

}

})
//route 3:get user details
router.post ('/getuser',fetchuser, async (req,res)=>
{
   
try {
   userId=req.user.id;
   const user=await User.findById(userId).select("-password");
    res.send(user)

} catch (error) {
   console.log(error.message);
res.status(500).send("internal server error occure");

}

})

module.exports=router;














































