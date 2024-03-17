const mongoose = require('mongoose')
const mongoURI =
  'mongodb+srv://dbadmin:dbadmin@cluster0.waygocq.mongodb.net/notebookdb?retryWrites=true&w=majority'
const connectToMongo = async () => {
  try {
    mongoose.connect(mongoURI)
    console.log('Connected to Mongo Successfully!')
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectToMongo
