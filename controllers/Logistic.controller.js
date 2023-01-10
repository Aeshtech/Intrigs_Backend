const xlsx = require("xlsx");
const ApprovedData = require("../models/ApproveItems.model");

exports.excelToJson = async (req, res) => {
    try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetNames = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.approveProducts = async (req, res) => {
    console.log(req.body.data);
    const result = await ApprovedData.create({ excelData: req.body.data });
    console.log(result);
    res.status(200).json(result);
  };
  