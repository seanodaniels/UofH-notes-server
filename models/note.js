const mongoose = require('mongoose')

// Create schema and include default validation for Mongoose.
// Note that this validation will not affect editing (PUT)
// so special validation is included in the PUT route.
const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 2,
    required: true
  },
  important: Boolean,
})

// Transform the default DB format to whatever we want it to be.
// So, we transform the MongoDB _id into our local id and get rid of __v
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)