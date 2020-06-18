const functions = require("firebase-functions");
const firebase = require("firebase");
const app = require("express")();
const cors = require("cors");
const config = require("./util/config");
const { getPlayers } = require("./routes/players");

// init app
firebase.initializeApp(config);

// middleware
app.use(
  cors({
    origin: "localhost:3000",
  })
);

// requests

// get requests
app.get('/players', getPlayers);

// export app as api
exports.api = functions.https.onRequest(app);

// cloud function listeners
