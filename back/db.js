var mongoose = require('mongoose');

const {
    // MONGO_USERNAME,
    // MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DATABASE_NAME
  } = process.env;
  
// Connection URL
const DB_URI = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DATABASE_NAME}`;
console.log("[db.js] DB_URI", DB_URI);

// if (process.env.MONGO_DB_URI) {
//   DB_URI = process.env.MONGO_DB_URI;
// }

// var dbname = process.env.DB || "mymongo";
//console.log("[db.js] DB_URI:", DB_URI);
// mongoose.connect('mongodb://' + dbname + ':27017/tmon', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(DB_URI, {useNewUrlParser: true})
.then(
    function() { console.log("[db.js] Mongodb connected!") },
    function(error) { console.log("[db.js] Error connecting to Mongo:\n", error) }
  );

// Listen for errors after initial connection
//mongoose.connection.on("error", console.error.bind(console, "[db.js] Mongo error"));

// mongoose.connection.once("open", function() {
//   console.log('[db.js] Mongodb connected');
// });

module.exports = mongoose;