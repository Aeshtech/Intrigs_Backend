const { excelToJson, approveProducts, getDestination } = require("../controllers/Logistic.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });


const router = require("express").Router();
router.post("/excel-to-json", upload.single("file"), excelToJson);
router.post("/approveProducts", approveProducts);
router.get("/getDestination", getDestination);

module.exports = router;