const express = require("express");

const router = express.Router();

const playerControllers = require("./controllers/playerControllers");
const adminControllers = require("./controllers/adminControllers");

// route for player
router.get("/player", playerControllers.browse);
router.get("/player/:id", playerControllers.read);
router.put("/player/:id", playerControllers.edit);
router.post("/player", playerControllers.add);
router.delete("/player/:id", playerControllers.destroy);

// route for admin
router.get("/admin", adminControllers.browse);
router.get("/admin/:id", adminControllers.read);
router.put("/admin/:id", adminControllers.edit);
router.post("/admin", adminControllers.add);
router.delete("/admin/:id", adminControllers.destroy);

module.exports = router;
