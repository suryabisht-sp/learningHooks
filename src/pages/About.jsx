import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DataContext from '../context/context'

const About = () => {
  const {data}=useContext(DataContext)
  const location = useLocation()
  console.log("first", data)
  const params = useParams()

  console.log("timer function", setTimeout(()=>{},))
  
  console.log("location", location, "params", params)
  // console.log("first", location.pathname.split("/"))
  return (
    <div>
      <h1>  About Page</h1>
      <br/>
      <p>Data from context: {data }</p>
    </div>
  )
}

export default About