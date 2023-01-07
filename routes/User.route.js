const router = require("express").Router();

const {
    createUser,
    getUsers,
    deleteUser,
    updateUser,
  } = require("../controllers/User.controller");
  
  router.post("/", createUser);
  router.get("/", getUsers);
  router.put("/delete/:id", deleteUser);
  router.put("/update/:id", updateUser);

  module.exports = router;