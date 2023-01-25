import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div `
  a, breadcrumb {
    color: black;
    &:hover {
      color: #adb1b8
    }
  }
`


const BreadcrumbsForm = () => {
  return (
    <Styles>
    <Breadcrumb>
        <Breadcrumb.Item ><Link to="/">Категории</Link></Breadcrumb.Item>
        <Breadcrumb.Item ><Link to="/">Товары</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>Натуральные продукты</Breadcrumb.Item>
      </Breadcrumb>
    </Styles>


  )
}

export default BreadcrumbsForm