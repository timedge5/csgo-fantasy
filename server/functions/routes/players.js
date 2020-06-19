const { admin, db } = require("../util/admin");

exports.getPlayers = (req, res) => {
  db.collection("players")
    .get()
    .then((data) => {
      let players = [];
      data.forEach((doc) => {
        players.push({
          playerId: doc.id,
          name: doc.data().name,
          role: doc.data().role,
          kpr: doc.data().kpr,
          dpr: doc.data().dpr,
          rating: doc.data().rating,
          age: doc.data().age,
          team: doc.data().team,
          price: doc.data().price,
          totalPoints: doc.data().totalPoints,
          roundPoints: doc.data().roundPoints,
          shortTeam: doc.data().shortTeam
        });
      });
      return res.json(players);
    })
    .catch((err) => {
      console.error(err);
    });
};
