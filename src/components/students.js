import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "./consts";
import Pagination from "./Pagination";

export default function Students() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filterByPoint, setFilterByPoint] = useState("")
  const [pagination, setPagination] = useState(1)
  const postsPerPage = 10
  const getData = async () => {
      const res = await axios.get(baseURL("students"))
      setData(res.data)
  }
  const buttonDelete = async (id) => {
    await axios.delete(baseURL(`students/${id}`))
    alert("Telebe silindi")
    setData(data.filter((item) => item.id !== id))
  }
  useEffect(() => {
    getData()
  },[])

  const filteredData = data.filter((student) => {
    const searchName = student.firstname.toLowerCase().includes(search.toLowerCase()) || student.lastname.toLowerCase().includes(search.toLowerCase())
    return searchName
  })
  const indexOfLastPost = pagination * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <>
      <input
        type="text" placeholder="name" value={search} onChange={(e) => setSearch(e.target.value)} />
      <input
        type="number" placeholder="point" value={filterByPoint} onChange={(e) => setFilterByPoint(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
             <th>ID</th>
             <th>Firstname</th>
             <th>Lastname</th>
            <th>Point</th>
             <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                 <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                  <td>{student.point}</td>
                <td>
                <button className="btn-delete" onClick={()=>buttonDelete(student.id)}>Delete</button>
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
