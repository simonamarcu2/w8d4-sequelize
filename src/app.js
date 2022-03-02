const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, find, update, destroy } = require("./Movies/movieMethod");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.add) {
    const filmObj = {
      name: argv.title,
      actor: argv.actor
    }
    await addFilm(filmObj)
  } else if (argv.list) {
    await list()
  } else if (argv.find) {
    const searchObj = objFromArrs(argv.keys, argv.values);
    await find(searchObj);
  } else if (argv.update) {
    const searchObj = objFromArrs(argv.keys, argv.values);
    const updateObj = objFromArrs(argv.updateKeys, argv.updateValues);
    await update(searchObj, updateObj);
  } else if (argv.delete) {
    const deleteObj = objFromArrs(argv.keys, argv.values);
    await destroy(deleteObj);
  } else {
    console.log("Incorrect command")
  }
}

app()
