import axios from 'axios';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser() {

    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [premiumMember,setPremiumMember]=useState(false)

    const submitUser=async (event)=>{
        event.preventDefault();
        const response= await axios.post("http://localhost:8000/users",
        {
            name:name,
            email: email,
            age: parseInt(age),
            premiumMember:premiumMember
        }
        )
        const id= response.data.id
        navigate("/users/"+id)
        

    }
  return (
    <div className='row justify-content-center'>
    <div className='col-md-4'>
    <Card className='p-4'>
    <Form onSubmit={submitUser}>
    
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder="Enter Your Name" required value={name} onChange={(event)=>setName(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Email</Form.Label>
          <Form.Control type='email' placeholder="name@example.com" required  value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type='number' placeholder="Age" required value={age}  onChange={(event)=>setAge(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            
            label="Premium Member" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)}
          />
        </Form.Group>
        <Button variant='primary' type="submit">Add User</Button>
      
    </Form>
    </Card>
    </div>
    </div>
  );
}

export default AddUser;