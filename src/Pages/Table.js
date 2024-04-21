import React, { useContext, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Newcontext } from "../App";

function Table1() {
  const [data, setData] = useContext(Newcontext);
  const [searchTerm, setSearchTerm] = useState("");


  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Form className="d-flex mt-3">
        <Form.Label>Search input</Form.Label>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>Qualification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.qualification}</td>
              <td>
                <Link to={`/Viewpage/${ind}`}>
                  <Button variant="success">View</Button>
                </Link>{" "}
                <Link to={`/Editpage/${ind}`}>
                  <Button variant="primary">Edit</Button>
                </Link>{" "}
                <Link to={`/Deletepage/${ind}`}>
                  <Button variant="danger">Delete</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <Link to={`/Adddetails`}>
          <Button variant="primary" className="center">
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Table1;
