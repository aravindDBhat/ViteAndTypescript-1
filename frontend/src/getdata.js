import React from "react";
import axios from "axios";

module.exports.getdata = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const Details = await axios.get(
    "https://vite-app-backend-ohxk.onrender.com/api/data",
    config
  );
  console.log("json data: ", Details);
  return Details;
};
