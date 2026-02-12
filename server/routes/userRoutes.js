const express = require("express");
const router = express.Router();


const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  exportUsers,
} = require("../controllers/userController");

// IMPORTANT: order matters

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/export", exportUsers);

router.get("/users/:id", getSingleUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
