import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/joy/Table";
import { Root, data } from "./sample";
import Sheet from "@mui/joy/Sheet";
function Datatable() {
  const [detail, setDetail] = useState<data[]>([
    {
      name: "a",
      phone_no: "12345",
      email: "a@gmail.com",
    },
  ]);
  var d = detail;
  async function getdata() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const Details: Root = await axios.get(
      "http://localhost:3000/api/data",
      config
    );
    d = Details.data;

    setDetail(d);
  }
  useEffect(function () {
    getdata();
  }, []);

  return (
    <div style={{ marginBottom: "5rem" }}>
      <Sheet
        style={{
          marginLeft: "25%",
          width: "35rem",
          maxHeight: "23rem",
          marginTop: "4%",
          padding: "2%",
          backgroundColor: "#e2f0f1",
          borderRadius: "8px",
          borderStyle: "solid",
          overflowY: "scroll",
          display: "inline-block",
        }}
      >
        <Table
          aria-label="basic table"
          style={{
            overflowX: "scroll",
          }}
        >
          <thead>
            {" "}
            <tr
              style={{
                backgroundColor: "#e2f0f1",
              }}
            >
              <th style={{ width: "30%" }}>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {detail.map((e) => (
              <tr key={e.name}>
                <td>{e.name}</td>
                <td>{e.phone_no}</td>
                <td>{e.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}
export default Datatable;
