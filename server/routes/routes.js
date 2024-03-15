const router=require('express').Router()
const User=require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register',async(req,res)=>{

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:hashedPassword,
})

    const result=await user.save()

    const {password,...data}=await result.toJSON()
    res.send(data)

})
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (!await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, "secret");

        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 //24 hr
        });

        res.send({
            token: token,
            message: 'Login successful'
        });
    } catch (error) {
        console.error('Error logging in:', error.message);
        res.status(500).send({ message: 'Error logging in' });
    }
});


router.get('/user',async(req,res)=>{
    
    try{
        const cookie=req.cookies['jwt']
    const claims=jwt.verify(cookie, 'secret')
    if(!claims){
        return res.status(401).send({message:'unauthenticated'})
    }

    const user = await User.findOne({ _id: claims.id });
    // res.status(200).send({message:"sucess"})

    const {password,...data}=await user.toJSON()
    res.send(data)
    }catch(error){
        return res.status(401).send({message:'unauthenticated'})
    }
})




// router.post('/logout',(req,res)=>{
//     res.cookie('jwt','',{maxAge:0})

//     res.send({message:'success'})

// })




module.exports=router;