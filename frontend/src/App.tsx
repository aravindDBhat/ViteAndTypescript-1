import { useState, useEffect } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Alert from "@mui/joy/Alert";
import axios from "axios";
import Datatable from "./table.tsx";
import SelectAllTransferList from "./list.tsx";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  const [nextpage, setNextpage] = useState(false);

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handlePhone_no = (e: any) => {
    setPhone_no(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const submit = async () => {
    if (!name) {
      setAlert("Please enter the Name");
      setVisible(true);

      return;
    }

    if (!phone_no) {
      setAlert("Please enter the Phone Number");
      setVisible(true);

      return;
    }

    if (!email) {
      setAlert("Please enter the Email");
      setVisible(true);

      return;
    }
    setNextpage(true);
    const payload = {
      name,
      phone_no,
      email,
    };
    setVisible(false);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("http://localhost:3000/api/data", payload, config);

    setEmail("");
    setName("");
    setPhone_no("");
  };
  useEffect(() => {
    setVisible;
    setNextpage;
  });

  return (
    <div style={{ textAlign: "left" }}>
      {nextpage === true ? (
        <div>
          <Datatable />
          <div>
            <SelectAllTransferList />
          </div>
        </div>
      ) : (
        <CssVarsProvider>
          <main>
            <Sheet
              sx={{
                width: 300,
                mx: "auto", // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "sm",
                boxShadow: "md",
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body-sm">
                  Please enter the details.
                </Typography>
              </div>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  // html input attribute
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleName}
                  value={name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  // html input attribute
                  id="number"
                  name="number"
                  type="tel"
                  placeholder="Phone Number"
                  onChange={handlePhone_no}
                  value={phone_no}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  // html input attribute
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  onChange={handleEmail}
                  value={email}
                />
              </FormControl>
              {visible ? (
                <Alert color="danger" variant="soft">
                  {alert}
                </Alert>
              ) : (
                ""
              )}
              <Button
                sx={{ mt: 1 /* margin top */ }}
                onClick={submit}
                type="submit"
              >
                Continue
              </Button>
            </Sheet>
          </main>
        </CssVarsProvider>
      )}
    </div>
  );
}

export default App;
