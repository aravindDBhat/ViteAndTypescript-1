import React from "react";
import axios from "axios";

module.exports.getdata = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const Details = await axios.get("http://localhost:3000/api/data", config);
  console.log("json file : ", Details);
  return Details;
};
