/* eslint-disable */ 
import  React,{useEffect,useState,useRef} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,CToaster,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import apiService from 'src/service/apiService'
import Toast from '../../base/model/index'
import ToastError from '../../base/model/indexError'

const Register = () => {
  const [form,setForm] = useState({username:null,email:null,password:null,repassword:null})
  const [validated, setValidated] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const signup = async(event)=>{
    const form1 = event.currentTarget
    if (form1.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)
    }else{
      event.preventDefault()
      if (form.password === form.repassword){
        
         try{
          let data ={}
          data.username = form.username
          data.email = form.email
          data.password = form.password
          const response = await apiService.signupUser(data)
          if(response.status ===201){
            let sync = ' successfully created User Account!'
            let hi = (<Toast sync={sync} />)
            addToast(hi)
            //  window.location.href = `/coed/admin/login`
            setInterval(()=>{( window.location.href = `/coed/admin/login`)},1400)
          }
         }catch(er){
          let arr = []
          let arraylist = JSON.parse(er.response.request.response)
          let arr1 = []
          arr.push(arraylist)
          for(let i=0; i< arr.length; i++ ){
            let a,err = arr[i].username
                a = err 
                arr1.push(a)   
             let a1,err1 = arr[i].password
                 a1 = (err1)  
                 arr1.push(a1)   
          }
          
          let sync2 = (arr1[0].toString())
          
          let hi2 = (<ToastError sync={sync2} />)
            addToast(hi2)


          if(er.response.status===400){
            let sync = 'Password must contain at least 8 characters With @#$%&!'
            let hi = (<ToastError sync={sync} />)
            addToast(hi)
          }
          else if(er.response.status===201){
            let sync = ' successfully created User Account!'
            let hi = (<Toast sync={sync} />)
            addToast(hi)
             window.location.href = `/coed/admin/login`
          }
         }

      }else{
        let sync = 'Password must contain at least 8 characters With @#$%&!'
            let hi = (<ToastError sync={sync} />)
            addToast(hi)
      }
      
    }    


  
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
      <CToaster  ref={toaster} push={toast} className="toaster toast-container  p-3 position-fixed top-0 start-50 translate-middle-x" />
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                noValidate
                validated={validated}
                onSubmit={signup}
                >
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput required feedbackInvalid="Username required !"  placeholder="Username" value={form.username} onChange={(e)=>setForm((username)=>({...username,username: e.target.value  }))}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput required feedbackInvalid="E-mail required !" placeholder="Email" value={form.email} onChange={(e)=>setForm((email)=>({...email,email: e.target.value  }))}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    {/* This password is too short. It must contain at least 8 characters.", "This password is too common.", "This password is entirely numeric. */}
                    <CFormInput
                      type="password" maxLength={9}
                      required feedbackInvalid="Password required  & It must contain at least 8 characters. #$@"
                      placeholder="Password"
                      value={form.password} onChange={(e)=>setForm((password)=>({...password,password: e.target.value  }))}
                    />
                    {/* <CInputGroupText>.00</CInputGroupText> */}
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      required feedbackInvalid="Repeat password must be same! "
                      type="password" maxLength={9}
                      placeholder="Repeat password"
                      value={form.repassword} onChange={(e)=>setForm((repassword)=>({...repassword,repassword: e.target.value  }))}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type='submit' >Create Account</CButton>
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
