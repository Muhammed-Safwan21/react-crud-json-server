import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(undefined);
  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8000/users/" + userId);
    setUser(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, [userId]);
  if (user === undefined) return <div>Loading...</div>;
  return (
    <div className='row justify-content-center'>
    <div className='col-md-6'>
    <Card>
      <Table striped borderless hover>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{userId}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Premium Member</td>
            <td>{user.premiumMember ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
    </div>
    </div>
  );
}

export default ViewUser;
