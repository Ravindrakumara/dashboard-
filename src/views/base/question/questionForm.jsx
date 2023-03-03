/* eslint-disable */ 

import  React,{useEffect,useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,CFormLabel,CFormInput,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil
} from '@coreui/icons'
import apiService from 'src/service/apiService'
const options = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "Tamil",
    value: "Tamil",
  },
  {
    label: "Sinhala",
    value: "Sinhala",
  }
];
function questionForm() {
  const [questionData, setQuestionData] = useState([])
  const [username,setUsername] = useState('')
  const [form,setForm] = useState({
    question:null,
    place:null,
    medium:null,
    modifyDate:null,
    createDate:null,
    softdeleteDate:null,
    createUser:null,
    modifyUser:null,
    softdeleteUser:null,
    isdelete:null,
  })

  useEffect(()=> {fetchData();finduser()}, [])

  const fetchData = async () => {
    const queryString = window.location
    const urlval = queryString.pathname
    let str = urlval.slice(21,35) 
    let id = str.replace('/', '')
    const x = await apiService.getAlterforquestion(id)
    let datalist = x.data
    setQuestionData(questionData.push(datalist))
    alter()
  }

  const finduser = async() =>{
    const respon = await apiService.getProfileInfo()
    setUsername(respon.data.username)
  }

  const alter = ()=>{
    form.question = questionData[0].question
    form.place = questionData[0].place
    form.medium = questionData[0].medium
    form.modifyDate = questionData[0].modifyDate
    form.createDate= questionData[0].createDate
    form.softdeleteDate= questionData[0].softdeleteDate
    form.createUser= questionData[0].createUser
    form.modifyUser= username
    form.softdeleteUser= questionData[0].softdeleteUser
    form.isdelete= questionData[0].isdelete
  }

  const alterForm = async()=>{
    const queryString = window.location
    const urlval = queryString.pathname
    let str = urlval.slice(21,35) 
    let id = str.replace('/', '')
    const x = await apiService.alterform(form,id)
  }
  const resetForm = ()=>{
    setForm(form.question = '')
    form.place = ''
    form.medium = ''
    form.modifyDate = ''
    form.createDate = ''
    form.softdeleteDate = ''
    form.createUser = ''
    form.modifyUser = ""
    form.softdeleteUser= ''
    form.isdelete= ''
  }
  return (
    <div>
      <CRow>
        {/* {questionData} */}
       <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Alter Question</strong>
          </CCardHeader>
          <CCardBody>
          <CForm >
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Question</CFormLabel>
                    <CFormInput value={form.question} onChange={(e)=>setForm((question)=>({...question,question: e.target.value  }))} className="text-primary"
                        type="text"
                        placeholder="name@example.com"
                        size="sm"
                    />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Place</CFormLabel>
                    <CFormInput value={form.place}  onChange={(e)=>setForm((question)=>({...question,place: e.target.value  }))}
                        type="text"
                        placeholder="name@example.com"
                        size="sm"
                    />
                    </CCol>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Medium</CFormLabel>
                    <CFormSelect value={form.medium} onChange={(e)=>setForm((question)=>({...question,medium: e.target.value  }))}>
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </CFormSelect>
                    </CCol>
                </CRow>
           </CForm> 
           &nbsp;    
            <CRow>
              <CCol>
                 
            </CCol>  
            <CCol>
                <CButton color='primary'  onClick={()=>{alterForm()}} size='sm'>Save</CButton> 
                &nbsp;
                <CButton color='danger' onClick={()=>{resetForm()}} size='sm' >Reset</CButton> 
            </CCol>  
            <CCol>
                
            </CCol>         
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </div>
  )
}

export default questionForm