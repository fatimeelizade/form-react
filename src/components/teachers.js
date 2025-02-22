import { useState,useEffect } from 'react';
import axios from "axios";
import baseURL from "./consts";
export default function Teachers(){
  const [data, setData]= useState([])
  const getData=async() =>{
    await axios
     .get(baseURL("teachers"))
      .then(response => { setData (response.data); })
  }
  const buttonDelete=async(id)=>{
    await axios.delete(baseURL(`teachers/${id}`));
    setData(data.filter((item)=>{return item.id !== id}))
  }
  useEffect(()=>{
    getData()
  },[])
    return(
        <>
        <table className="table" >
          <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody> 
    {data.map((data)=>{
      return <tr key={data.id}>
        <th scope="row">{data.id}</th> 
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.email}</td>
        <button className='btn-delete' onClick={() => buttonDelete(data.id)}>Delete</button>
    </tr>
    })}


  </tbody>
</table>
        </>
    )
}