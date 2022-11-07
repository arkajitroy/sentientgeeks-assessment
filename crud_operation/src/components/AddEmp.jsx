import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import EmployeeDataServices from "../services/employeeServices";

const AddEmp = ({ id, setEmpId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  // submit handler
  const handlerSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || email === "" || phone === "" || address === "") {
      setMessage({ error: true, msg: "All the fields are mandatory" });
      return;
    }
    const newEmployee = {
      name,
      email,
      phone,
      address,
    };
    console.log(newEmployee);

    try {
      if (id != undefined && id !== "") {
        await EmployeeDataServices.updateEmployee(id, newEmployee);
        setEmpId("");
        setMessage({ error: false, msg: "Updated Successfully" });
      } else {
        await EmployeeDataServices.addEmployee(newEmployee);
        setMessage({ error: false, msg: "Successfully added an Employee" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.msg });
    }

    // After submission the fields will be empty
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  // fetching the data from the database
  async function editHandler() {
    setMessage("");
    try {
      const docSnap = await EmployeeDataServices.getSingleEmp(id);
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setPhone(docSnap.data().phone);
      setAddress(docSnap.data().address);
      console.log("The Record is ", docSnap.data());
    } catch (err) {
      setMessage({
        error: true,
        msg: err.message,
      });
    }
  }

  useEffect(() => {
    console.log("The id is ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      <div className="p-4 form-container">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        {/* NAME FIELD */}
        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formEmpName">
            <InputGroup>
              <InputGroup.Text id="formEmpName">Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Name of Employee"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* EMIAL FIELD */}
          <Form.Group className="mb-3" controlId="formEmpEmail">
            <InputGroup>
              <InputGroup.Text id="formEmpEmail">Email</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* PHONE FIELD */}
          <Form.Group className="mb-3" controlId="formEmpPhone">
            <InputGroup>
              <InputGroup.Text id="formEmpPhone">Phone</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter the contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* ADDRESS FIELD */}
          <Form.Group className="mb-3" controlId="formEmpEmail">
            <InputGroup>
              <InputGroup.Text id="formEmpEmail">Address</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Location"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="dark" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddEmp;
