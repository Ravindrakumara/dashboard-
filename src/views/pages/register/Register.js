/* eslint-disable */ 
import  React,{useEffect,useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import apiService from 'src/service/apiService'

const Register = () => {
  const [form,setForm] = useState({username:null,email:null,password:null,repassword:null})
  const signup = async()=>{

    if (form.password === form.repassword){
      alert("hello")
      let data ={}
          data.username = form.username
          data.email = form.email
          data.password = form.password
       const response = await apiService.signupUser(data)
       console.log(response,"Hon")
       window.location.href = `/coed/admin/login`
    }
    else{
      alert("invalid")
      // window.location.href = `/coed/app/dashboard`
    }
  
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" value={form.username} onChange={(e)=>setForm((username)=>({...username,username: e.target.value  }))}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" value={form.email} onChange={(e)=>setForm((email)=>({...email,email: e.target.value  }))}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      value={form.password} onChange={(e)=>setForm((password)=>({...password,password: e.target.value  }))}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      value={form.repassword} onChange={(e)=>setForm((repassword)=>({...repassword,repassword: e.target.value  }))}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={()=>{signup()}} >Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
