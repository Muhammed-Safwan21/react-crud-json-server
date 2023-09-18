import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function EditUser() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [premiumMember,setPremiumMember]=useState(false)
    const {userId}=useParams()
    const [user,setUser]=useState(undefined);
    const fetchUsers =async ()=>{
        const response=await axios.get("http://localhost:8000/users/"+userId);
        setUser(response.data);
        const user=response.data;
        setName(user.name)
        setEmail(user.email)
        setAge(user.age)
        setPremiumMember(user.premiumMember)
    }
    useEffect(()=>{fetchUsers()},[userId]);
    const updateUser=async(event)=>{
        event.preventDefault();
        await axios.patch("http://localhost:8000/users/"+userId,
        {
            name:name,
            email:email,
            age:age,
            premiumMember:premiumMember
        })

        alert("Updated")

    }
    
  return (
    <div className='row justify-content-center'>
        <div className='col-md-4'>
    <Card className='p-4'>
    <Form onSubmit={updateUser}>
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
          <Form.Control type='number' placeholder="Age" required value={age} onChange={(event)=>setAge(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            
            label="Premium Member" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)}
          />
        </Form.Group>
        <Button variant='primary' type="submit">Save</Button>
      
    </Form>
    </Card>
    </div>
    </div>
  )
}

export default EditUser