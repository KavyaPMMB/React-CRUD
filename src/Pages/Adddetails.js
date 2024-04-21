
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Newcontext } from '../App';

function Adddetails() {
    const navigate=useNavigate()

    const [data,setData]= useContext(Newcontext)

    
    const [input,setInput]=useState({
        name:"" ,
        age:"",
        qualification:"",
      })
     
      const handlechange = (e) =>
      {
        //console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
      };
      

      const Submit = (sub)=>{
      //  console.log(data);
        sub.preventDefault();
        const newdata=[...data,input]
        setData(newdata);
       
        navigate('/')
          
      }
          
  return (
    <div>
        <Form className='form' onSubmit={Submit}>
          <h1 className='heading'>Add Details</h1>

          <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={handlechange} name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Age</Form.Label>
        <Form.Control type="" placeholder="Enter your age " onChange={handlechange} name="age" />
      </Form.Group>

      <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type=" " placeholder="Enter your qualification" onChange={handlechange} name="qualification" />
      </Form.Group>

      <div className='text-center'>
      <Button variant="primary" type="submit" className="center" >
        Add
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Adddetails