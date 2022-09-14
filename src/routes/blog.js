const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here :-

// api with query parameter
router.get('/blog', async(req,res)=>{
    try{
        let page = req.query.page ;
        let search = req.query.search;
        res.json({page: page , search :search})
    }catch(e){
        return res.status(404).send()
    }
})

// creating collection through this
router.post('/blog' , async (req ,res) =>{
    try{
        const user = new Blog(req.body)
        const createUser  = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        return res.status(404).send()
    }
})

//Updating
router.patch('/blog/:id' , async (req ,res) =>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id , req.body ,{
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e)
    }
})

// deleting
router.delete('/blog/:id' , async (req ,res)=>{
    try{
        const id = req.params.id;
        const deleteStudents = await Student.findByIdAndDelete(req.params.id)
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteStudents)
    }catch(e){
        res.status(404).send(e)
    }
})


module.exports = router;