const mongoose = require('mongoose')

//schema is a JSON object that defines the structure and contents of the data

const goalSchema = mongoose.Schema(
    {
    text : {
        type: String,
        required: [true, 'Please add a text value']
        },
    },
    {
        timestamps: true,
    }  //timestamps - If you set timestamps: true , Mongoose will add two properties 
    //of type Date to your schema: createdAt : a date representing when this document was created. updatedAt : a date representing when this document was last updated.
)


module.exports = mongoose.model('Goal', goalSchema)