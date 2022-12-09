const mongoose = require('mongoose')

// you can add requirements to the inputs
const TaskSchema = new mongoose.Schema({
    name:{required:[true,'must provide name'],
    trim:true,  // this is to delete empty spaces in line
        type:String,
        maxlength:[20,'name cannot be more than 20 characters'],

    },
    
    
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)

