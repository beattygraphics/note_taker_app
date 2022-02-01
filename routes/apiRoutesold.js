// DEPENDENCIES
const fs = require("fs");
const generateUniqueId = require("generate-unique-id");

const editNote = (updatedNotesList) => {
  fs.writeFile("./db/db.json", JSON.stringify(updatedNotesList), (err) => {
    if (err) throw err;
  });
};

// ROUTING
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  // POST REQUEST
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const notesList = JSON.parse(data);
      newNote.id = generateUniqueId({ length: 10 });
      notesList.push(newNote);

      editNote(notesList);
      console.log(`New Note Added! Title: ${JSON.stringify(
          newNote.title
        )}, Text: ${JSON.stringify(newNote.text)}, ID: ${newNote.id}`
      );

      res.send(notesList);
    });
  });

  // // DELETE REQUEST
  // app.delete("/api/notes/:id", (req, res) => {
  //   const deleteId = req.params.id;
  //   fs.readFile("./db/db.json", "utf8", (err, data) => {
  //     if (err) throw err;
  //     let notesList = JSON.parse(data);

  //     //Uses unique ID to remove note
  //     for (let i = 0; i < notesList.length; i++) {
  //       if (notesList[i].id === deleteId) {
  //         notesList.splice(i, 1);
  //       }
  //     }
  //     editNote(notesList);
  //     console.log(`Note Deleted! ID: ${deleteId}`);
  //     res.send(notesList);
  //   });
  // });


  app.put("/api/notes/:id", (req, res) => {
    const editId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      let notesList = JSON.parse(data);
      let activeNote = notesList.find((note) => note.id === editId);


      if (activeNote) {
        let updatedNote = {
          title: req.body.title,
          text: req.body.text, 
          id: activeNote.id,
        };


        let targetIndex = notesList.indexOf(activeNote);

        notesList.splice(targetIndex, 1, updatedNote);

        res.sendStatus(204);
        editNote(notesList);
        res.json(notesList);
      } else {
        res.sendStatus(404);
      }
    });
  });
};