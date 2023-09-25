const models = require("../models");

const getPlayerByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.player
    .findByEmail(req.body.email)
    .then(([rows]) => {
      const playerInDatabase = rows[0];
      if (playerInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        req.user = playerInDatabase;
        next();
      }
    })
    .catch((error) => {
      console.error("Error during user retrieval:", error);
      res.sendStatus(500);
    });
};

const getAdminByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.admin
    .findByEmail(req.body.email)
    .then(([rows]) => {
      const userInDatabase = rows[0];
      if (userInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;
        next();
      }
    })
    .catch((error) => {
      console.error("Error during user retrieval:", error);
      res.sendStatus(500);
    });
};

module.exports = {
  getPlayerByEmailWithPasswordAndPassToNext,
  getAdminByEmailWithPasswordAndPassToNext,
};