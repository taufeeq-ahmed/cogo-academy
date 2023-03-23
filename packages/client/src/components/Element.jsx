import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
const Element = () => {
  const [s, setS] = useState("");
  useEffect(() => {

    axios.post('http://0.0.0.0:8080/users/sign-up',
     {
      email: "mahesh@gmail.com",
      password: "helloworld",
      name: "rudra",
      batch: "batch-2",
      github_username: "rudra.ad"
    })
      .then((res) => {
        console.log(res);
      })
      .catch()
    // axios.post('http://0.0.0.0:8080/users/sign-in', {
    //   email: "example@gmail.com",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })




  }, [])
  return (
    <div>{s}</div>
  )
}

export default Element;