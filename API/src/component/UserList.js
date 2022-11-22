import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import ReactPaginate from 'react-paginate'
import "./style.css"

const UserList = ({listOfUser}) => {
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 4;
  const pagesVisited = pageNumber * userPerPage

   const displayUsers = listOfUser.slice(pagesVisited, pagesVisited + userPerPage).map(user => <UserCard user={user}/>)

   const pageCount = Math.ceil(listOfUser.length/ userPerPage)

   const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  return (
    <div className='usersList'>
        <div className='ListContainer'>
              {displayUsers}
        </div>
        

<div className='paginationClass'> 
<ReactPaginate 
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
      />  
  
</div>

    </div>
  )
}

export default UserList