const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const personSchema = {
    name: {type: String, required: true},
    age: Number,    
    favoriteFoods: [String],
}


const Person = mongoose.model("Person", personSchema)
module.exports = Person