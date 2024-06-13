const express = require('express')
const path = require('path')
const app = express()
const userRoute = require('./routes/user')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended: false }))

mongoose
  .connect('mongodb://localhost:27017/blogify')
  .then(console.log('MongoDB Connected'))

app.get('/', (req, res) => {
  res.render('home')
})

app.use('/user', userRoute)

app.listen(8000, () => console.log('Server Started!'))
