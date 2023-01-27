const mongoose = require("mongoose");

const approvedDatasSchema = new mongoose.Schema({
  excelData: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("approveddatas", approvedDatasSchema, "approveddatas");