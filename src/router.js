const express = require("express");

const router = express.Router();

const playerControllers = require("./controllers/playerControllers");
const adminControllers = require("./controllers/adminControllers");
const authControllers = require("./controllers/authControllers");
const { hashPassword, verifyPassword, logout } = require("./services/auth.js");

// route for player
router.get("/player", playerControllers.browse);
router.get("/player/:id", playerControllers.read);
router.put("/player/:id", playerControllers.edit);
router.post("/player", hashPassword, playerControllers.add);
router.delete("/player/:id", playerControllers.destroy);
router.post(
  "/player/login",
  authControllers.getPlayerByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// route for admin
router.get("/admin", adminControllers.browse);
router.get("/admin/:id", adminControllers.read);
router.put("/admin/:id", adminControllers.edit);
router.post("/admin", hashPassword, adminControllers.add);
router.delete("/admin/:id", adminControllers.destroy);
router.post(
  "/admin/login",
  authControllers.getAdminByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/logout", logout);

module.exports = router;
