import { useState,useEffect } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import baseURL from "./consts";
export default function Students(){
  async function getStudents(skip = 0) {
    const { data } = await axios.get(`https://67ade6f79e85da2f020ba665.mockapi.io/forms/students?skip=${skip}`);
    return data;
  }
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();

  const { data: students} = useQuery({
    queryKey:["students", page],
    queryFn:()=>getStudents(page*10),
  });

  const buttonDelete = async (id) => {
    await axios.delete(baseURL(`students/${id}`));
  };
  /* const [data, setData]= useState([])
  const getData=async() =>{
    await axios
     .get(baseURL("students"))
      .then(response => { setData (response.data); })
  }
  const buttonDelete=async(id)=>{
    await axios.delete(baseURL(`students/${id}`));
    setData(data.filter((item)=>{return item.id !== id}))
  }
  useEffect(()=>{
    getData()
  },[]) */
    return(
        <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        {students.map((student) => (
            <tr key={student.id}>
            <th scope="row">{student.id}</th>
             <td>{student.firstname}</td>
            <td>{student.lastname}</td>
          <td>{student.email}</td>
           <td>
             <button className="btn-delete" onClick={() => buttonDelete(student.id)}>Delete</button>
         </td>
            </tr>
         ))}
        </tbody>
      </table>
      <button onClick={() => setPage((prev) => prev - 1)}>Arxaya</button>
      <button onClick={()=>setPage((prev) =>prev+1)}>Qabaga</button>
        </>
    )
}