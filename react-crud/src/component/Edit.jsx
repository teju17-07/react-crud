import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
   let {userid} = useParams()
   console.log(userid);

   let [name , setName] = useState()
     let [id , setId] = useState()
     let [role , setRole] = useState()
    //  console.log({name , id , role});

    //  read the data

    useEffect(() => {
        axios.get("http://localhost:8081/users/",+userid)
        .then((res) => {
          console.log(res);
          // console.log(res.data[0].id);
          setName(res.data.name)
          setId(res.data.id)
          setRole(res.data.role)
        })
    } , [])

    // update

    let edit = (e) => {
      e.preventDefault()
      let payload = {name , id , role}
      axios.put("http://localhost:8081/users/"+userid , payload)
      .then(() => {
        console.log("updated successfully");

      })
    }

  return (
    <div>
       <form action="">
              name : <input type="text" name="" id="" onChange={(e) => setName(e.target.value) } />
              <br />
              id : <input type="number" name="" id="" onChange={(e) => setId(e.target.value) } />
              <br />
              role : <input type="text" name="" id="" onChange={(e) => setRole(e.target.value) } />
              <br />
              <button onClick={edit}>submit</button>
              <button> <Link to="/">Back to Home</Link> </button>
             </form>
    </div>
  )
}

export default Edit