const fs = require("fs");

const PATH = "./db/db.json";

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {

    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));
    res.json(notes);
  });

  app.post("/api/notes", function (req, res) {
    

    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    const newNote = req.body;

    newNote.id = notes.length + 1;

    notes.push(newNote);

    fs.writeFile(PATH, JSON.stringify(notes), function (err) {
      if (err) return console.log(err);
    });

    res.json(notes);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const notes = JSON.parse(fs.readFileSync(PATH, "utf-8"));

    const noteToDelete = req.params.id - 1;
    notes.splice(noteToDelete, 1);

    // Write the file
    fs.writeFile(PATH, JSON.stringify(notes), function (err) {
      if (err) return console.log(err);
    });

    res.json(notes);
  });
};