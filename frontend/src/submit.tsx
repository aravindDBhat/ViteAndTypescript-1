import { useState } from "react";

function Submit() {
  const [details, setDetails] = useState([{}]);

  function Data(data: object) {
    setDetails((details) => [...details, data]);
    console.log(details);
  }
  console.log(Data);
}
export default Submit;
