require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.ATLAS_MONGODB_URL;

module.exports = {
  MONGODB_URI,
  PORT,
};
