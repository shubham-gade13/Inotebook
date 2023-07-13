var jwt = require('jsonwebtoken');
const JWT_SECRETE="harryisagoodboy";


const fetchuser=(req,res,next)=>
{
    //get tjh user from jwt tocken and add id to rq

    const token=req.header('auth-token');

    if(!token)
    {
        res.status(401).send({error:"please authenticate using  valid token"});

    }
    try {
                const data=jwt.verify(token,JWT_SECRETE);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"please authenticate using  valid token"});

        
    }
   

}

module.exports=fetchuser