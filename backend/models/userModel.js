const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please add a name'],
    },
    email:{
        type: String,
        required:[true, 'Please add a name'],
        unique: true
    },
    password:{
        type: String,
        required:[true, 'Please add a name'],
    },
},
)
{
  timestamps: true //that will give an automated createdat and updatedat fields
}

module.exports = mongoose.model('User', userSchema)