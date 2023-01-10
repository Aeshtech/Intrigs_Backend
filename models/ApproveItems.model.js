const mongoose = require("mongoose");

const approveItemsSchema = new mongoose.Schema({
  excelData: [
    {
      type: Object,
    },
  ],
});

module.exports = mongoose.model("ApproveItems", approveItemsSchema);