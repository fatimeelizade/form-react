export default function Pagination({ postsPerPage, totalPosts, currentPage, paginate }) {
    const paginationNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      paginationNumbers.push(i);
    }
  
    return (
      <div className="pagination">
        {paginationNumbers.map((pageNumber) => (
          <button key={pageNumber} className={currentPage === pageNumber ? "active" : ""} onClick={() => paginate(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    );
  }