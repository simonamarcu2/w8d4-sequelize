const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
  try {
    await Film.sync()
    await Film.create(filmObj)
  } catch (error) {
    console.log(error)
  }
}

exports.list = async () => {
  try {
    const listOfMovies = await Film.findAll()
    console.log(listOfMovies)
  } catch (error) {
    console.log(error)
  }
}

exports.find = async (obj) => {
  try {
    const searchResults = await Film.findAll({
      where: obj,
    });
    searchResults.forEach((movie) => {
      printAttribs(movie);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (searchObj, updateObj) => {
  await Film.update(updateObj, { where: searchObj });
};

exports.destroy = async (deleteObj) => {
  await Film.destroy({ where: deleteObj });
};
