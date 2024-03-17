const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const app = express()
const port = 4000

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
// })

app.use(express.json())
//Available Routes
app.use('/api/auth', require('./routes/auth'))
//app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
