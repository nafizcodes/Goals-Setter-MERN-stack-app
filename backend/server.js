const express = require('express')   //express is our backend web framework
const dotenv = require('dotenv').config() //to bring in our env  //config allows to create a dotenv file with our variables in it
const colors = require('colors')
const port = process.env.PORT || 5000  //port to run our server on it  // Port reading from .env file
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded ({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))