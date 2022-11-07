import React, { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import EmployeeDataServices from "../services/employeeServices";

function DataSheet({ getEmpId }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    const data = await EmployeeDataServices.getAllEmp();
    console.log(data.docs);
    setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await EmployeeDataServices.deleteEmployee(id);
    getEmployee();
  };

  // main-render
  return (
    <div id="datasheet-container">
      <div className="mb-4 float-start">
        <Button
          className="mb-2 float-start"
          variant="dark"
          onClick={getEmployee}
        >
          Refresh List
        </Button>
      </div>

      {/* Table / Database section */}
      <div className="table-container">
        <p className="tableName">
          Employee <b>Manage</b>
        </p>
        <Table className="table table-warning table-hover" size="s">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Street</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  <td>{doc.name}</td>
                  <td>{doc.email}</td>
                  <td>{doc.phone}</td>
                  <td>{doc.address}</td>
                  <td className="d-flex justify-content-evenly">
                    <Button
                      variant="warning"
                      className="edit"
                      onClick={(e) => getEmpId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DataSheet;
