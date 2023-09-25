const express = require("express");

const router = express.Router();

const playerControllers = require("./controllers/playerControllers");

// route for player
router.get("/player", playerControllers.browse);
router.get("/player/:id", playerControllers.read);
router.put("/player/:id", playerControllers.edit);
router.post("/player", playerControllers.add);
router.delete("/player/:id", playerControllers.destroy);

// route for admin
router.get("/player", playerControllers.browse);
router.get("/player/:id", playerControllers.read);
router.put("/player/:id", playerControllers.edit);
router.post("/player", playerControllers.add);
router.delete("/player/:id", playerControllers.destroy);

module.exports = router;
