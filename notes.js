console.log("Note.js starting...");

//set variables and functions by using module.exports------->
module.exports.age = function (a, b) {
    console.log("hi friends!!");
    return a + b;
};
module.exports.country = "India";

//yargs--------------------->
const fs = require('fs');

let fetchNotes = function () {
    try {
        let notesString = fs.readFileSync('notes.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

let addNote = function (title, body) {
    console.log("Title: " + title);
    console.log("Body: " + body);

//  adding the note literally---->
    let note = {    //make a object to store individual notes
        title: title,
        body: body
    };

    //make a array to store all the note object, if already created fetch it
    let notes = fetchNotes();
    let duplicatetitle = notes.filter((note)=>note.title === title);

    if (duplicatetitle.length === 0) {
        notes.push(note);
        saveNotes(notes, note);
    } else {
        console.log("Already exist title");
    }
};

let getAll = function () {
    console.log("Getting all the list");
    return fetchNotes();
};

let read = function (title) {
    console.log("Reading the note with title: " + title);
    let notes = fetchNotes();
    let found= notes.filter((note)=>note.title === title);
    debugger;
    return found[0];
};

let removeNote = function (title) {
    console.log("Removing the note with title: " + title);
    let notes = fetchNotes();
    let newNoteArray = notes.filter((notes)=>notes.title !== title);
    saveNotes(newNoteArray);
    return notes.length === newNoteArray.length;
};

module.exports = {
    addNote,    //same as addNote:addNote   (if LHS is same as RHS, just write it one time
    getAll,
    read,
    removeNote
};
