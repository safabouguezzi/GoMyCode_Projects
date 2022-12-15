const express = require('express')
const router = express.Router()
const personSchema = require('../models/personSchema')



//! Create a person
router.post('/newPerson', (req, res) => {
    let newPerson = new personSchema(req.body)
    newPerson.save((err, data) => {
      err ? err : res.send('New person was added')
    });
  });

  //!  Create Many Records with model.create()
router.post('/manyPerson', (req, res) => {
    personSchema.create(req.body, (err, data) => {
      err ? console.log(err) : res.send(data)
    })
  });


//!  Search  Database
router.get('/getAll', (req, res) => {
    personSchema.find((err, data) => {
      err ? console.log(err) : res.send(data)
    })
  });


//!  Single Matching Document from  Database
router.get('/getOne', (req, res) => {
    personSchema.findOne({ favoriteFoods: 'pizza' }, (err, data) => {
      err ? console.log(err) : res.send(data)
      console.log(data)
    })
  });


//! Search data by ID
router.get('/getById/:id', (req, res) => {
    personSchema.findById( {_id : req.params.id}, (err, data) => {
        err ? console.log(err) : res.send(data)
        console.log(data)
    })
})


//! Perform Classic Updates by Running Find, Edit, then Save
router.put('/updPerson/:id', (req, res) => {
    personSchema.findById({_id: req.params.id} ,(err, data) => {
        data.favoriteFoods.push('hamburger');
        data.save()
        res.send(data)
    })
})


//! Perform Classic Updates by Running Find, Edit, then Save
router.put('/updAge/:name', (req, res) => {
    personSchema.findOneAndUpdate({name:req.params.name}, {"age": 20}, (err, data) =>{
        if(err){return console.log("Something wrong when updating record!");}
        res.send(data); 
    })
})



//! Delete One Document Using model.findByIdAndRemove
router.delete('/:id', (req, res) => {
    personSchema.findByIdAndRemove({_id: req.params.id},(err,data)=> {
        err? console.log(err) : res.send('person was deleted ')
    })
})


    //! Delete Many Documents with model.remove()

    router.delete('/removeByName/:name',(req,res)=> {
        personSchema.remove({name:req.params.name},(err,data)=> { 
            err ?  console.log(err) : res.json(data)
        })   
    })
    


    //! Chain Search Query Helpers to Narrow Search Results

    router.get('/',(req,res)=> {
        personSchema.find({favoriteFoods:{$elemMatch:{$eq: "pizza" }  }})
        .sort({name: "desc"})
        .limit(2)
        .select("-age")
        .exec((err, data) => {
            if(err)
            return  console.log(err);
        res.json(data)
        })  
    })


module.exports = router