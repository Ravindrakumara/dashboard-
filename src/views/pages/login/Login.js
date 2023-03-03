/* eslint-disable */ 
import  React,{useEffect,useState,useRef} from 'react'
import { Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,CToaster, 
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import apiService from 'src/service/apiService'
import Toast from '../../base/model/index'
import ToastError from '../../base/model/indexError'

const Login = () => {
  const [form,setForm] = useState({username:'',password:''})
  // const [validationform,setValidationform] = useState({error_username:'',error_password:''})
  const [validated, setValidated] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()

 
  const signin = async(event)=>{
  const form1 = event.currentTarget
  if (form1.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
    setValidated(true)
  }
  else{
    event.preventDefault()
    
    try{
      setValidated(true)
      const x = await apiService.loginUser(form)
        switch(x.status){
          case 200:
            let sessionToken = x.data
            localStorage.setItem('auth_Token', sessionToken.auth_token); 
            let sync = 'Login successfully completed !'
            let hi = (<Toast sync={sync} />)
            setInterval(()=>{addToast(hi)},500)
            setInterval(()=>{( window.location.href = `/coed/admin/dashboard`)},1400)
            break;
    
        }
    }
    
    catch(err){
       if(err.response.status===400){
          let sync1 = 'Credentials Invalid try again !'
          let hi1 = (<ToastError sync={sync1} />)
          // setInterval(()=>{},1500)
          addToast(hi1)
       }
       setValidated(true)
    }
    
  }

  }

  return (
    <div>
    
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
         <CToaster  ref={toaster} push={toast} className="toaster toast-container  p-3 position-fixed top-0 start-50 translate-middle-x" />
        <CRow className="justify-content-center">
          
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                
                <CCardBody>
                  
                  <CForm 
                  noValidate
                  validated={validated}
                  onSubmit={signin} 
                  >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput required feedbackInvalid=" Valid username required. Try again" placeholder="Username" value={form.username}  onChange={(e)=>setForm((username)=>({...username,username: e.target.value  }))}/>
                      
                    </CInputGroup>
                    {/* {!validationform.error_username && validationform.error_username ? <p className='text-danger' ><small>{validationform.error_username}</small></p>:null} */}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput required type="password" placeholder="Password" feedbackInvalid="Please enter valid password. Try again"
                        value={form.password}  onChange={(e)=>setForm((password)=>({...password,password: e.target.value  }))}
                      />
                    </CInputGroup>
                    {/* {validationform.error_password && <p className='text-danger'><small>{validationform.error_password}</small></p>} */}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
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
    </div>
  )
}

export default Login
