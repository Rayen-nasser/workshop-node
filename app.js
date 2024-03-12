const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: "Add a new note",
    handler: () => {
        console.log("handel yargs");
    }
})