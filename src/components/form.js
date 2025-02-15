import { useState } from 'react';
import axios from "axios";
import baseURL from './consts';
function Form() {
  const [datas, newData] = useState({ firstname: "", lastname: "", email:"" });
  const [dataToArray, newDataToArray] = useState([]);
  function changeDatas(e){
    newData({ ...datas, [e.target.name]: e.target.value })
  }
  const clickButton = async () => {
      const res = await axios.post(baseURL("students"), datas);
      newDataToArray([...dataToArray, res.data]);
      newData({ firstname:null, lastname:null, email:null });
    
  }

    return (
      <>
        <div>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="firstname" value={datas.firstname} onChange={changeDatas}/>
        </div>
        <div>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lastname" value={datas.lastname} onChange={changeDatas}/>
        </div>
        <div>
        <label for="lname">Email:</label>
        <input type="text" id="ename" name="email" value={datas.email} onChange={changeDatas}/>
        </div>
        <button className='btn' onClick={clickButton}>Submit</button>
      </>
    )
  }
  export default Form;