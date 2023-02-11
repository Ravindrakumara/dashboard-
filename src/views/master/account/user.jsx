/* eslint-disable */ 

import {useEffect,React,useState} from 'react'
import {
  CButton,
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
  cilPencil
} from '@coreui/icons'
import apiService from 'src/service/apiService'
function questionList() {
  const [questionData, setquestionData] = useState([]);
  useEffect(() => {
    apiService.followerRetrive()
    .then(data => setquestionData(data.data))
  }, [])

  const redirect = (x)=>{
    window.location.href = `follower/${x.id}/`;  
  }
  return (
    <div>
      <CRow>
       <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Followers</strong><CButton>Add</CButton>
          </CCardHeader>
          <CCardBody>
              <CTable>
                {/* <CTableCaption>List of users</CTableCaption> */}
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fullname</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">E-mail</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">D.O.B</CTableHeaderCell>
                    {/* <CTableHeaderCell scope="col">Current Age</CTableHeaderCell> */}
                    <CTableHeaderCell scope="col">Awaken date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Orgin center</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Create</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Modify</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {questionData && questionData.map((x,i)=>(
                  <CTableRow>
                    <CTableHeaderCell scope="row">{i+1}</CTableHeaderCell>
                    <CTableDataCell className="text-primary">{new Date(x.createDate).toLocaleDateString()}</CTableDataCell>
                    <CTableDataCell>{x.fullname}</CTableDataCell>
                    <CTableDataCell>{x.phone}</CTableDataCell>
                    <CTableDataCell>{x.email}</CTableDataCell>
                    <CTableDataCell>{x.address}</CTableDataCell>
                    <CTableDataCell className="text-success">{new Date(x.dob).toLocaleDateString()}</CTableDataCell>
                    {/* <CTableDataCell>{(new Date() - new Date(x.dob)).toLocaleDateString()}</CTableDataCell> */}
                    <CTableDataCell className="text-success">{new Date(x.awakenDate).toLocaleDateString()}</CTableDataCell>
                    <CTableDataCell>{x.origincenter}</CTableDataCell>
                    <CTableDataCell>{x.createUser}</CTableDataCell>
                    <CTableDataCell>{x.modifyUser}</CTableDataCell>
                    <CTableDataCell>
                      <a onClick={()=>redirect(x)}  className="pe-auto" ><CIcon icon={cilPencil} className="text-primary" /></a>
                    </CTableDataCell>
                  </CTableRow>
                 ))}
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
  )
}

export default questionList