const express = require("express");
const router = express.Router();
const dataservice = require("../services/data.service.js");

router.get("/", async (req, res) => {
  try {
    const data = await dataservice.GetData(res);
    res.json(data);
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    console.log("payload : ", payload);
    const data = await dataservice.SaveData(payload);
    console.log("data : ", data);
    res.json({
      message: "data saved",
    });
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
});
module.exports = router;
