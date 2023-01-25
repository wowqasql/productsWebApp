import React, { useEffect, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListIcon from '@mui/icons-material/List';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORY } from '../router/routerPath';
import { fetchProducts,fetchTypes } from '../../http/productAPI';
import { typeActionCreator } from '../../reducers/type/action-creator';
import axios from 'axios';

const Categories = () => {
  
  const [typeId, setTypeId] = useState([])
  const [fetchType, setFetchType] = useState([])
  const [types, setType] = useState('')
  const navigate = useNavigate()

  // const dispatch = useDispatch()
  // const {types} = useSelector(state => state.type)


   useEffect(() => {
    fetchTypes().then(data => setFetchType(data))
   }, [])
   
   useEffect(() => {
    fetchProducts(types.id).then(data => console.log(data))
     console.log(types)
    
  }, [types])

  return (
    <Dropdown className='my-4'>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        <ListIcon className='m-2' />
        {types.name || 'Категории'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={() => navigate('/')}>Все товары</Dropdown.Item>
        {fetchType.map( type =>
          <Dropdown.Item onClick={() => setType(type)}>{type.name}</Dropdown.Item>
          )}
        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Categories