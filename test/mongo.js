const mongoose = require("mongoose");
require("dotenv-safe").config();

const url = process.env.ATLAS_MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "Hey there what's up?",
//   important: true,
// });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});

// note.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });
