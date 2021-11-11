// Note taker Application
// landing page
// Notes page can save a note and write a note, adn delete a note
// Just using Express

// 136 handleNoteView = sets the active not to the one I am clicking on.
//renderrActiveNote

//starting on line 7 - need to get the back end working


//Steps

// Do a folder structure to make the routes moduler.

// 1. maek server.js file.
    //  require express, app = express
    //  middle eare for Posts

// 2. Routes (these are HTML routes)
    // this app has 2 kinds  (ome routes, and Notes route)
    //  Home route send index.html
    //  Notes route sends notes.html

// 3. API Routes send Json
        //   GET /api/notes  (read DB.json  -  you will need an fs file) After you read it you will need to parce the data    .json.parse  to the front end
        // Make sure the db.json file is set up and working properly.
        // If this is working you will see notes in the file.

        //   POST /api/notes
        // need to find an npm package to create unique ID's
        // Look at line 101 and "data-note" to configure the unique ID.
        // Make a barebone POST / api/notes route
        // try console.log(req.body)
        // make a new object wituh the text and title kets
        // tack on an ID(id) to that new object (UUID)  -  Look up someting to generate unique ID's
        // you have to read the file db.json => Parce it into json => push the new note onto array => fs.writefile (stringify data then fs.writefile)

//4. BONUS Delete  app.delete /api/notes/:id
        // read the db.json +> parce into json => req.params.id
        // fine the note whos ID matches the req param id.
        // once you have found that ID, you will need to stringify it and write it fs.writeFile
