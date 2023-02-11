/* eslint-disable */ 

import  React,{useEffect,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil
} from '@coreui/icons'
import apiService from 'src/service/apiService'

function questionForm(color,errMsg, ) {
  
  
  return (
    <div>
      <CRow>
        {/* {questionData} */}
       <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
        
          </CCardHeader>
          <CCardBody>
          
           
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
  )
}

export default questionForm