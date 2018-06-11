//----------------------------------ENTRY POINT-----------------------------------------------
// firstly run : npm install (to install all the required 3rd party modules)
// type node app.js --help for help

console.log('App starting..');

//including other file in same folder------->
const note = require("./notes.js");

const titleOptions={
    describe:"Title of the note",   //description of object title
    demand:true,                    //whether or not absolutely required to add the note
    alias:"t"                       //to short the --title to -t
};
const bodyOptions={
    describe:"Body of the note",
    demand:true,
    alias:"b"
};

const arg = require('yargs')
    .command("add",": To add the note",{
        title:titleOptions,
        body:bodyOptions
    })
    .command("list",": to list all the notes")
    .command("read",": to read a specific note",{
        title:titleOptions
    })
    .command("remove",": to remove a specific note",{
        title:titleOptions
    })
    .help()
    .argv;

let command=process.argv[2];
switch (command) {
    case "add":
        console.log("Adding note via Yargs....");
        note.addNote(arg.title, arg.body);
        break;
    case "list":
        let allNote=note.getAll();
        console.log(`Printing ${allNote.length} note(s)`);
        allNote.forEach((note)=>{
           console.log("Title: "+note.title);
           console.log("Body: "+note.body);
           console.log("------------------");
        });
        break;
    case "read":
        let found=note.read(arg.title);
        found===undefined? console.log("Not found :("):
            console.log("Note found!! having title: "+found.title+"\nBody: "+found.body);
        break;
    case "remove":
        let isRemoved = note.removeNote(arg.title);
        let m = isRemoved ? "Note not present!!" : "Note deleted!!";
        console.log(m);
        break;
}