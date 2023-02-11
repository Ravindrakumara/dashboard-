/* eslint-disable */ 
import  React,{useEffect,useState} from 'react'
import { Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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

const Login = () => {
  const [form,setForm] = useState({username:null,password:null})

  const signin = async(e)=>{
    // let navigate = useNavigate();
    // e.preventDefault();
    const x = await apiService.loginUser(form)
    if(x.status === 200){
       let sessionToken = x.data
       localStorage.setItem('auth_Token', sessionToken.auth_token); 
       window.location.href = `/coed/admin/dashboard`
    }else{
      
    }
    
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" value={form.username}  onChange={(e)=>setForm((username)=>({...username,username: e.target.value  }))}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password" placeholder="Password"
                        value={form.password}  onChange={(e)=>setForm((password)=>({...password,password: e.target.value  }))}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={()=>{signin()}} >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white  py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    {/* <h2>Sign up</h2> */}
                    <h1 style={{color:"#f20000"}} id="Textcolor">
                      The One Collector
                    </h1>
                    <Link to="/coed/admin/register">
                      <CButton color="" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
