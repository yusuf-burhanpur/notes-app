
const chalk = require('chalk');
const notes = require('./notes.js');

const yargs = require('yargs'); 

//creating yargs version
yargs.version('1.2.3');

// creating add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{

            describe: 'note title',
            demandOption: true,
            type: 'string',

        },

        body:{

            describe: 'write your text here',
            demandOption: true,
            type: 'string',

        }

    },
    handler: (argv) => notes.addNotes (argv.title, argv.body)
   
})

     // challenge 3
 yargs.command({
     command: 'remove',
     describe: 'remove a new note',
     builder:{
        title: {
            describe: 'title of a note',
            demandOption: true,
            type: String

        }
     },
    handler:(argv) => notes.removeNotes (argv.title)
})


yargs.command({
    command: 'list',
    describe: 'listing a new note',
   handler :(argv) =>   notes.listNotes (argv.title)
   
})


yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title:{
            describe: 'title of a note',
            demandOption: true,
            type:'String'
        }
    },
    handler:(argv) =>   notes.readNotes(argv.title, argv.body)
 
})

console.log(yargs.argv);








