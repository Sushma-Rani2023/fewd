import React from 'react'
import {useLocation} from 'react-router-dom'

const Info = () => {
    const state = useLocation();
    const {name,age,phone} = state.state
  return (
    <>
     <h1>{name}</h1>
     <h1>{age}</h1>
     <h1>{phone}</h1>
    </>
  )
}

export default Info