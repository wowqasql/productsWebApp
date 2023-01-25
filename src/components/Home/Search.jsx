import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

  const [search, setSearch] = useState('')
  
  const onSearch = () => {
    return search.filter(s => s.name)
  }
  return (
    <>
    <Form className="d-flex">
    <Form.Control
      value={search}
      onChange={e => setSearch(e.target.value)}
      type="search"
      placeholder="Поиск..."
      className="me-2"
      aria-label="Search"
      />
    <Button 
      
      variant="outline-secondary">
    <SearchIcon/>Поиск</Button>
  </Form>
  <div className='my-5'></div>
  </>
  )
}

export default Search