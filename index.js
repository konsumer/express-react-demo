import express from 'express'

import helloRouter from './routes/hello'

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/', helloRouter)

app.listen(3000)
console.log('Running on http://0.0.0.0:3000')
