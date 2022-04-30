const util = require('util');
const fs = require('fs');

const uuid = require('uuidv4');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store{ 
    read(){
        
        return readFileAsync('db/db.json','utf-8')
    }
    write(note){
        return writeFileAsync('db/db.json',JSON.stringify(note))
    }
    getNotes(){
        return this.read().then(notes=>{
            let parsedNotes;
            try {parsedNotes = [].concat(JSON.parse(notes))}
            catch(err){
             parsedNotes = [];
            }
        return parsedNotes;
        });
    }
    saveNote(note){
        const {title, text} = note;
        if(!title|| !text){
            throw new Error(`
            Please Submit a title and text.
            (Cannot be blank)
            `)
        }
        const newNote = {id: uuid(), title, text};
        this.getNotes()
        .then(notes=>[...notes, newNote])
        .then((changedNotes)=> this.write(changedNotes))
        .then(()=>newNote)
    }
};

module.exports= new Store();