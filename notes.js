const fs = require('fs')
const chalk = require('chalk')

const addNotes= (title, body) => {

    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {return note.title ===title})

if(duplicateNotes.length === 0){

    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green('new Note added!!'))
}
else {
    console.log(chalk.red('title has been taken!!!'))
}
}
const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}


const removeNotes = (title)=>{
  const notes =  loadNotes()

    const deletingNote = notes.filter ((note) => {

        return note.title !== title
})
if (notes.length > deletingNote.length){
    console.log(chalk.red('note has been removed'))
    saveNotes(deletingNote)
}else{
    console.log(chalk.green('no not found'))
}
}

const listNotes = ()=> {
    console.log(chalk.green('your notes'))
   const notes =  loadNotes() 
    {
    notes.forEach((_listing) => {

        console.log(_listing.title)
         
    }); 
}
}

const readNotes = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)

    if (findNote){
        console.log(chalk.bold.green(findNote.title))
        console.log(findNote.body)
    }
else{
    console.log(chalk.red('no note found'))
}


}
 



module.exports = {

    
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}