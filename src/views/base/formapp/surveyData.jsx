/* eslint-disable */ 
import {useEffect,React,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil, cilTrash
} from '@coreui/icons'

import apiService from '../../../service/apiService'


function formE() {
  const [formData, setformData] = useState([]);
  
  useEffect(() => {
    apiService.getAll()
    .then(data => setformData(data.data))
  }, []);

  const redirect = (x)=>{
    let id  = x.id
    window.location.href = `form/${id}/`;  
  }
  
  return (
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>One minutes for succesfull life</strong>
        </CCardHeader>
        <CCardBody>
            <CTable>
              <CTableHead color="dark">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Fullname</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Create</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                  {/* <CTableHeaderCell scope="col">Delete</CTableHeaderCell> */}
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {formData && formData.map((data,index)=>(
                <CTableRow>
                  <CTableHeaderCell className="text-danger" key={data.id} scope="row">{index+1}</CTableHeaderCell>
                  <CTableDataCell className="text-primary">{new Date(data.createDate).toLocaleDateString()}</CTableDataCell>
                  <CTableDataCell>{data.fullname}</CTableDataCell>
                  <CTableDataCell>{data.address}</CTableDataCell>
                  <CTableDataCell>{data.phone}</CTableDataCell>
                  <CTableDataCell>{data.email}</CTableDataCell>
                  <CTableDataCell>{data.createUser}</CTableDataCell>
                  <CTableDataCell>{data.modifyUser}</CTableDataCell>
                  {/* <CTableDataCell>{data.softdeleteUser}</CTableDataCell> */}
                  <CTableDataCell>
                  <a onClick={()=>redirect(data)}  className="pe-auto" ><CIcon icon={cilPencil} className="text-primary" /></a>
                  &nbsp;
                  <CIcon icon={cilTrash} className="text-danger"/>
                  </CTableDataCell>
                </CTableRow>
                ))}
              </CTableBody>
            </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  )
}

export default formE