/* eslint-disable */ 

import {useEffect,React,useState} from 'react'
import {
  CCard,
  CCardBody,CAvatar,
  CProgress,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CCardHeader, 
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,cilPencil,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import apiService from 'src/service/apiService'
function questionList() {
  const [questionData, setquestionData] = useState([]);
  useEffect(() => {
    apiService.getAllforquestions()
    .then(data => setquestionData(data.data))
  }, [])
  
 

  const redirect = (x)=>{
    window.location.href = `question/${x.id}/`;  
  }
  return (
    <div>
      <CRow>
       <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Question list</strong>
          </CCardHeader>
          <CCardBody>
              <CTable>
                {/* <CTableCaption>List of users</CTableCaption> */}
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Medium</CTableHeaderCell>
                    <CTableHeaderCell scope="col">place</CTableHeaderCell>
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
                    <CTableDataCell>{x.question}</CTableDataCell>
                    <CTableDataCell>{x.medium}</CTableDataCell>
                    <CTableDataCell>{x.place}</CTableDataCell>
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