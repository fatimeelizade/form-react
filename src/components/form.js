import { useState } from 'react';
import axios from "axios";
function Form() {
  const [datas, newData] = useState({ firstname: "", lastname: "", email:"" });
  function changeDatas(e){
    newData({ ...datas, [e.target.name]: e.target.value })
  }
  const clickButton = async () => {
    try {
      const res = await axios.post("https://67ade6f79e85da2f020ba665.mockapi.io/form/forms", datas);
      newData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <>
        <form>
        <div>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="firstname" value={datas.name} onChange={changeDatas}/>
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
        </form>
        <table className="table d-none" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
      </>
    )
  }
  
  export default Form;