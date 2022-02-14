import React, {useState} from 'react';
let currentHook = 0

export default function demohoo() {
    currentHook = 0
    const [ enableFirstName, setEnableFirstName ] = useState(false)
    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
  
    const handleChange = (evt) =>{
      setName(evt.target.value);
    }
  
    const handlelastNameChange = (evt) =>{
      setLastName(evt.target.value);
    }
  
    const handleEnableChange =(evt)=>{
      setEnableFirstName(!enableFirstName)
    }
  return (
      <>
       <h1>My name is: {enableFirstName ? name : ''} {lastName} </h1>
       <input type="checkbox" value={enableFirstName} onChange={handleEnableChange} />
       <input type="text" value={name} onChange={handleChange} />
       <input type="text" value={lastName} onChange={handlelastNameChange} />
      </>
  )
}
