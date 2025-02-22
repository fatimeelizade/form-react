import { useState } from 'react';
import axios from "axios";
import baseURL from './consts';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useMutation} from '@tanstack/react-query';
function Form() {
  /* const queryClient = useQueryClient();
  const [data, setData]= useState({firstname: "", lastname: "", email:"" })
  function changeDatas(e){
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const postData = async (data) => {
    if (!data.firstname || !data.lastname || !data.email) {
      alert("Bos yerleri doldurun!");
    }
    return await axios.post(baseURL("students"), data);
  };

  const{ mutate: mutateCreateNewFunction}= useMutation({mutationFn:()=>
    postData.(data)
  }) */
  
  /* const [datas, newData] = useState({ firstname: "", lastname: "", email:"" });
  const [dataToArray, newDataToArray] = useState([]);
  function changeDatas(e){
    newData({ ...datas, [e.target.name]: e.target.value })
  }
  const{ mutate: mutateCreateNewFunction}= useMutation({mutationFn:()=>
    studentsService.createNewStudent(userData)
  })
  const clickButtonStudent = async () => {
      if(!datas.firstname || !datas.lastname || !datas.email){
        alert("Sahələri boş qoymayın!")
        return
      }
      const res = await axios.post(baseURL("students"), datas);
      if(res.data.firstname && res.data.lastname && res.data.email){
        newDataToArray([...dataToArray, res.data]);
      }
      newData({ firstname:"", lastname:"", email:"" });
    
  }
  const clickButtonTeacher=async()=>{
    // if(!datas.firstname || !datas.lastname || !datas.email){
    //   alert("Sahələri boş qoymayın!")
    //   return
    // }
    // const res = await axios.post(baseURL("teachers"), datas);
    // if(res.data.firstname && res.data.lastname && res.data.email){
    //   newDataToArray([...dataToArray, res.data]);
    // }
    // newData({ firstname:"", lastname:"", email:"" });

    mutateCreateNewFunction()
  } */
    const [data, setData]= useState({firstname: "", lastname: "", email:"" })
    function changeDatas(e){
      setData({ ...data, [e.target.name]: e.target.value })
    }
 const postData = async(data)=>{
    return await axios.post(baseURL("students"), data)
 }
//  const [mutate, { isLoading, isError, error }] = useMutation(res);
const { mutate} = useMutation(postData, () => {
    setData({ firstname: "", lastname: "", email: "" });
  }
);
 const handleClick =()=>{
  if(!data.firstname || !data.lastname || !data.email){
    alert("bos yerleri doldurun");
    return
  }else{
    mutate(data)
  }
 }
    return (
      <>
      <div className='form'>
        <div>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="firstname" onChange={changeDatas} value={data.firstname}/>
        </div>
        <div>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lastname" onChange={changeDatas} value={data.lastname}/>
        </div>
        <div>
        <label htmlFor="ename">Email:</label>
        <input type="text" id="ename" name="email" onChange={changeDatas} value={data.email}/>
        </div>
        <div>
        <button className='btn-student' onClick={handleClick}>Create student</button>

        </div>
      </div>
      </>
    )
  }
  export default Form;