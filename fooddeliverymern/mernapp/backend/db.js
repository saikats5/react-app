const mongoose = require('mongoose')
const mongoURI =
  'mongodb+srv://dbadmin:dbadmin@cluster0.waygocq.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log('ERROR', err)
      } else {
        console.log('Connected DB')
        const fetched_data = await mongoose.connection.db.collection(
          'food_items'
        )
        fetched_data.find({}).toArray(function (err, data) {
          if (err) {
            console.log('ERROR', err)
          } else {
            console.log(data)
          }
        })
      }
    }
  )
}
module.exports = mongoDB
