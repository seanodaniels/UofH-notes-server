const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://sodaniels:${password}@od20.rlnkt2r.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)



// const note = new Note({
//   content: 'Oh freddled gruntbuggly, thy mictarations are to me...',
//   important: true,
// })

// const note = new Note({
//   content: 'Browser can execute only JavaScript',
//   important: true,
// })

// const note = new Note({
//   content: 'GET and POST are the most important methods of HTTP protocol',
//   important: true,
// })

// const note = new Note({
//   content: 'So long, and thanks for all the fish.',
//   important: true,
// })

// note.save().then(response => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })


Note.find({}).then(result => {
  result.forEach(note => {
    console.log(`The note "${note.content}" has an _id of "${note._id}"`)
  })
  mongoose.connection.close()
})