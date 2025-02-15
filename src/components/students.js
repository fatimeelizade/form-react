export default function Students(){
    return(
        <>
        <table className="table " >
          <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody> 
  {dataToArray.map((e, inx) => (
    <tr key={inx}>
        <th scope="row">{inx+1}</th> 
      <td>{e.firstname}</td>
    <td>{e.lastname}</td>
    <td>{e.email}</td>
  </tr>
))}

  </tbody>
</table>
        </>
    )
}