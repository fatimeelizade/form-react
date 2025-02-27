import { useState } from 'react';
import axios from "axios";
import baseURL from './consts';
import { useMutation} from '@tanstack/react-query';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
function Form() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const valuesTeacher = [true];
  const [fullscreenTeacher, setFullscreenTeacher] = useState(true);
  const [showTeacher, setShowTeacher] = useState(false);
  function handleShowTeacher(breakpoint) {
    setFullscreenTeacher(breakpoint);
    setShowTeacher(true);
  }
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
//------------
const [data, setData]= useState({firstname: "", lastname: "", point:"" })
const [dataTeacher, setDataTeacher]= useState({firstname: "", lastname: "", sahe:"" })
    function changeDatas(e){
      setData({ ...data, [e.target.name]: e.target.value })
    }
    function changeDatasTeacher(e){
      setDataTeacher({ ...dataTeacher, [e.target.name]: e.target.value })
    }
 const postDataStudents = async(data)=>{
    return await axios.post(baseURL("students"), data)
 }
 const postDataTeachers = async(data)=>{
  return await axios.post(baseURL("teachers"), data)
}
  const {mutate: mutateStudent} = useMutation({
    mutationFn:postDataStudents, 
    onSuccess:() => { 
        setData({ firstname: "", lastname: "", point: "" });
      }
  });
   const handleClick =()=>{
    if(!data.firstname || !data.lastname || !data.point){
      alert("bos yerleri doldurun"); 
    }
    else{
      alert("Student added!")
      mutateStudent(data)
    }
   }
   const {mutate:mutateTeacher} = useMutation({
    mutationFn:postDataTeachers, 
    onSuccess:() => { 
        setDataTeacher({ firstname: "", lastname: "", sahe: "" });
      }
  });
   const handleClickTeacher =()=>{
    if(!dataTeacher.firstname || !dataTeacher.lastname || !dataTeacher.sahe){
      alert("bos yerleri doldurun"); 
    }
    else{
      alert("Teacher added!")
      mutateTeacher(dataTeacher)
    }
   } 
    /* const [data, setData]= useState({firstname: "", lastname: "", email:"" })
    function changeDatas(e){
      setData({ ...data, [e.target.name]: e.target.value })
    }
 const postDataStudents = async(data)=>{
    return await axios.post(baseURL("students"), data)
 }
 const postDataTeachers = async(data)=>{
  return await axios.post(baseURL("teachers"), data)
} */
/* const {mutate: mutateStudent} = useMutation({
  mutationFn:postDataStudents, 
  onSuccess:() => { 
      setData({ firstname: "", lastname: "", email: "" });
    }
});
 const handleClick =()=>{
  if(!data.firstname || !data.lastname || !data.email){
    alert("bos yerleri doldurun"); 
  }
  else{
    mutateStudent(data)
  }
 }
 const {mutate:mutateTeacher} = useMutation({
  mutationFn:postDataTeachers, 
  onSuccess:() => { 
      setData({ firstname: "", lastname: "", email: "" });
    }
});
 const handleClickTeacher =()=>{
  if(!data.firstname || !data.lastname || !data.email){
    alert("bos yerleri doldurun"); 
  }
  else{
    mutateTeacher(data)
  }
 } */
    return (
      <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Add student
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="firstname" onChange={changeDatas} value={data.firstname}/>
        </div>
        <div>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lastname" onChange={changeDatas} value={data.lastname}/>
        </div>
        <div>
        <label htmlFor="ename">Point:</label>
        <input type="number" id="ename" name="point" onChange={changeDatas} value={data.point}/>
        </div>
        <button className='btn-student' onClick={handleClick}>Create student</button>
        </Modal.Body>
      </Modal>
      {valuesTeacher.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShowTeacher(v)}>
                    Add teacher
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={showTeacher} fullscreen={fullscreenTeacher} onHide={() => setShowTeacher(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add teacher </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="firstname" onChange={changeDatasTeacher} value={dataTeacher.firstname}/>
        </div>
        <div>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lastname" onChange={changeDatasTeacher} value={dataTeacher.lastname}/>
        </div>
        <div>
        <label htmlFor="ename">Sahe:</label>
        <input type="text" id="ename" name="sahe" onChange={changeDatasTeacher} value={dataTeacher.sahe}/>
        </div>
        <button className='btn-student' onClick={handleClickTeacher}>Create teacher</button>
        </Modal.Body>
      </Modal>
      <div className='form'> 
        {/* <div>
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
        <button className='btn-student' onClick={handleClickTeacher}>Create teacher</button>
        </div> */}
      </div>
      </>
    )
  }
  export default Form;