import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

const Pages = () => {
  const pages =[0,1,2,3,4,5,6,7,8,9,]
  const [page, setPage] = useState('')
  const [totalCount, setTotalCount] = useState('')
  const [limit, setLimit] = useState('')
  
  return (
    <Pagination>
      {pages.map(page => <Pagination.Item>{page}</Pagination.Item>)}
    

  </Pagination>
  )
}

export default Pages