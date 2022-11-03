const mongoose=require('mongoose');

const xyzSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true    
    },
    sub:{
        type:Boolean,
        rquired:true,
        default:false
    }
})

module.exports=mongoose.model("xyz",xyzSchema);