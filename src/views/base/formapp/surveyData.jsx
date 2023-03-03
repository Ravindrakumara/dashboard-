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
  cilPencil, cilTrash, cilPeople,cilSpeech,cilEnvelopeLetter
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
                  <CTableHeaderCell scope="col"><CIcon icon={cilPeople}/></CTableHeaderCell>
                  <CTableHeaderCell scope="col">Alert</CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {formData && formData.map((data,index)=>(
                <CTableRow>
                  <CTableHeaderCell className="text-danger" key={data.id} scope="row">{index+1}</CTableHeaderCell>
                  <CTableDataCell className="text-primary">{new Date(data.createDate).toLocaleDateString()}</CTableDataCell>
                  <CTableDataCell>
                        <div><b>{data.fullname}</b></div>
                        <div className="small text-medium-emphasis" >
                          <span className=" small text-warning">{data.phone}</span><br/> <span className="small text-info">{data.email}</span>
                        </div>
                        <div className="small text-primary">{data.address}</div>
                      </CTableDataCell> 
                  
                  <CTableDataCell>
                    <div className="text-primary"> 
                    <span ><CIcon className='text-danger' title='SMS' icon={cilSpeech}/>{data.acceptsms ? '✓':'✗'}</span><span className='d-flex'><CIcon className='text-danger' title='E-MAIL' icon={cilEnvelopeLetter}/>{data.acceptemail ? '✓':'✗'}</span></div>
                  </CTableDataCell>

                  <CTableDataCell>
                    <div className="small text-primary">
                     How do you feel about life in the present days ?
                     <br/> <span className="small text-success">{data.q1}</span>
                    </div>
                    <div className="small text-primary">
                     Are you engaged in any coping mechanisms ?
                     <br/> <span className="small text-success">{data.q2}</span>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="small text-primary">
                    Would you like to consider spiritual engagement as a form of coping mechanism ?
                     <br/> <span className="small text-success">{data.q3}</span>
                    </div>
                    <div className="small text-primary">
                    Are you prepared to allocate at least a minute daily to become happy and make those around you happy ?
                     <br/> <span className="small text-success">{data.q4}</span>
                    </div>
                    </CTableDataCell>
                
                  <CTableDataCell>
                  <a onClick={()=>redirect(data)}  className="pe-auto" ><CIcon icon={cilPencil} className="text-primary" /></a>
                  &nbsp;
                  {/* <CIcon icon={cilTrash} className="text-danger"/> */}
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