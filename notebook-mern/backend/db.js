const mongoose = require('mongoose')
const mongoURI =
  'mongodb+srv://dbadmin:<password>@cluster0.waygocq.mongodb.net/'
const connectToMongo = async () => {
  try {
    mongoose.connect(mongoURI)
    console.log('Connected to Mongo Successfully!')
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectToMongo
