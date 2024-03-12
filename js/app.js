
// modules 

// 1- core modules 
 
  const fs = require("fs")

//   fs.writeFileSync( "data1.txt" , "Naima Chokri" )

//   console.log(fs.readFileSync("data1.txt").toString())

//   fs.appendFileSync("data1.txt" , " , Nour Ali")

//   console.log(fs.readFileSync("data1.txt").toString())

//  fs.appendFileSync("data1.txt" , " , Mohamed Ali")


///////////////////////////////////////////////////////////////////////////////////////////////

  const x = require("./allData")

  ////////////////////////////////////////////////////////////////////////////////////////////

  // 2  npm :

  const validator = require("validator")
// const yargs = require("yargs")

  //  console.log(validator.isEmail("drahmed@gmail.com"))

/////////////////////////////////////////////////////////////////////////////////////////////

const yargs = require("yargs")
const data10 = require("./data10")

yargs.command({
  command : "all",
  describe : "to get all users",
  handler:()=> {
    let users = data10.getAll()
    console.log("data: ", users);
  }

})

yargs.command({
  command : "one",
  describe : "to get user with id",
  handler:()=> {
    let user = data10.findById(5)
    console.log("person with id 5: ", user);
  }

})

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      id : {
        describe: "this is the first name description in add command",
        demandOption: true,
        type : "number"
     },
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     },
     city : {
       describe: "this is the city description in add command",
       demandOption: true,
       type : "string"
      },
      age :{
        describe: "this is the age description in add command",
        demandOption: true,
        type : "number"
      }
    },
    handler:(x)=> {
      data10.addPerson(x)
    }
})


yargs.command({
  command : "delete",
  describe : "to delete an item",
  handler:()=> {
    data10.deleteData(1)
  }

})

console.log(yargs.argv)
