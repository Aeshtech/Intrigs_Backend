const { login } = require("../controllers/Login.controller");

const router = require("express").Router();

router.post("/", login);

module.exports = router;