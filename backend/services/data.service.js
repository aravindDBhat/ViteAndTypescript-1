var details = [];
module.exports.SaveData = async function (payload) {
  console.log("function is running");
  console.log(payload);
  details.push(payload);
  console.log("details : ", details);
  return details;
};

module.exports.GetData = async function (res) {
  return details;
};
