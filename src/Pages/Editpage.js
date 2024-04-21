import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../Styles/edit.css'
import { Newcontext } from '../App'

function Editpage() {
  
   const [data,setData]= useContext(Newcontext)
  const {user} = useParams()
  
  const navigate=useNavigate()


  const editdata=data[user]
  
  
  const [input,setInput]=useState({
    name:editdata.name ,
    age:editdata.age,
    qualification:editdata.qualification,
  })

  const handlechange = (e) =>
  {
    setInput({...input,[e.target.name]:e.target.value})
  };


  const submit = (sub)=>{
setInput(data[user]=input);
    navigate("/")
      console.log("newdata :",input)
  }
  return (
     <div>
        <Form className='form' onSubmit={submit}>
        <h1 className='heading'> Edit Page</h1>
        
        <Form.Group className="mb-3" controlId="" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={editdata.name}  onChange={handlechange} name="name"/> 
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number " placeholder={editdata.age}  onChange={handlechange} name="age"/>



        </Form.Group>
        <Form.Group className="mb-3" controlId=" ">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type=" " placeholder={editdata.qualification} onChange={handlechange} name="qualification"/>
        </Form.Group>
       <div className='text-center'>
       <Button variant="primary" type="submit" className='center'>
        Edit
      </Button>
      </div>
    </Form>
     </div>
  )
}
export default Editpage