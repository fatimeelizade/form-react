import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "./consts";
import Pagination from "./Pagination";

export default function Teachers() {
  const [data, setData] = useState([])
  const [search ,setSearch] = useState("")
  const [filterSahe, setfilterSahe] = useState("")
  const [pagination, setPagination] = useState(1)
  const postsPerPage = 10
  const getData = async () => {
    const res = await axios.get(baseURL("teachers"))
    setData(res.data);
  }
  const buttonDelete = async (id) => {
    await axios.delete(baseURL(`teachers/${id}`))
    alert("Muellim silindi")
    setData(data.filter((item)=>item.id !== id))
  }
  useEffect(() => {
    getData()
  }, [])
  const filteredData = data.filter((teacher)=>{
    const searchName = teacher.firstname.toLowerCase().includes(search.toLowerCase()) || teacher.lastname.toLowerCase().includes(search.toLowerCase())
    const searchSahe = filterSahe === "" || teacher.sahe=== filterSahe
    return searchName && searchSahe
  })
  const indexOfLastPost = pagination * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <>
      <input
        type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}
      />
  <input
        type="text" placeholder="Filter by point" value={filterSahe} onChange={(e) => setfilterSahe(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Sahe</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((teacher) => (
            <tr key={teacher.id}>
                <td>{teacher.id}</td>
               <td>{teacher.firstname}</td>
                <td>{teacher.lastname}</td>
               <td>{teacher.sahe}</td>
              <td>
                <button className="btn-delete" onClick={() => buttonDelete(teacher.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredData.length}
        currentPage={pagination}
        paginate={setPagination}
      />
    </>
  );
}
