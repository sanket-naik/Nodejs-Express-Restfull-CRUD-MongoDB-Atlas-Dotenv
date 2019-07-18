const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// ,{collection:'posts'}
// postSchema.set('collection','posts')

module.exports=mongoose.model('Posts',postSchema);