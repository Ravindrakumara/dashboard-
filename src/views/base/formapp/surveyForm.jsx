/* eslint-disable */
import React, { useEffect, useState,useRef} from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,CToast,CToastHeader,CToastBody,CToaster,
  } from '@coreui/react'
  import apiService from 'src/service/apiService'
  import Toast from '../../base/model/index'
  import ToastError from '../../base/model/indexError'

function formS() {
  const [profileData,setProfileData]  = useState([])
  const [userInfo,setUserInfo]  = useState('')
  const [uniqId,setUniqId]  = useState(0)
  const [question,setQuestion]  = useState([])
  const [questionData,setQuestionData]  = useState([])
  const [geoset,setGeoset] = useState(false)
  const [q1,setQ1] = useState("")
  const [q2,setQ2] = useState("")
  const [q3,setQ3] = useState("")
  const [q4,setQ4] = useState("")
  const [q5,setQ5] = useState("")
  const [q6,setQ6] = useState("")
  const [form,setForm]  = useState({fullname:null,
                                    phone:null,
                                    email:null,
                                    address:null,
                                    q1:null,
                                    q2:null,
                                    q3:null,
                                    q4:null,
                                    q5:null,
                                    accuracy:null,
                                    altitude:null,
                                    altitudeAccuracy:null,
                                    heading:null,
                                    latitude:null,
                                    longitude:null,
                                    acceptsms:null,
                                    acceptemail:null})
  const [validated, setValidated] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()          

  useEffect(()=>{
    serveyQuestionList()
    spiltway()
    profile()
    // setUserInfo()
  },[])

  const profile=async()=>{
    let x =[]
    const queData = await apiService.getProfileInfo()
    x.push(queData.data)
    setProfileData(x)
    setUserInfo(queData.data.username)
  }

  const spiltway = async() =>{
    const queryString = window.location
    const urlval = queryString.pathname
    let str = urlval.slice(16,35) 
    let id = str.replace("/","")
    let repl = id.replace("/","")
    let a = parseInt(repl)

    if( isNaN(a) === false){
       const data = await apiService.alterformSurvey(a)
       let i = data.data
       setQuestionData(questionData.push(i))
       alter()
       setUniqId(a)
    }else{

    }
  } 
  // async alterformSurvey

  const serveyQuestionList = async()=>{
    const queData = await apiService.getAllforquestions()
    const x = queData.data
    const q1 = x.filter((item) => item.place == 1);
    const q2 = x.filter((item) => item.place == 2);
    const q3 = x.filter((item) => item.place == 3);
    const q4 = x.filter((item) => item.place == 4);
    const q5 = x.filter((item) => item.place == 5);
    const q6 = x.filter((item) => item.place == 6);
    setQ1(q1[0].question)
    setQ2(q2[0].question)
    setQ3(q3[0].question)
    setQ4(q4[0].question)
    setQ5(q5[0].question)
    setQ6(q6[0].question)
  }
//
  
  const reset =()=>{
    setForm((x)=>({...x,fullname:"",
      phone:"",
      email:"",
      address:"",
      q1:"",
      q2:"",
      q3:"",
      q4:"",
      q5:"",
      accuracy:null,
      altitude:null,
      altitudeAccuracy:null,
      heading:null,
      latitude:null,
      longitude:null,
      acceptsms:false,
      acceptemail:false}));
      let sync = 'Reset successfully Done!'
      let hi = (<Toast sync={sync} />)
      // setInterval(()=>{},500)
      addToast(hi)   
  }
 
  const alter = ()=>{
    form.fullname = questionData[0].fullname
    form.phone = questionData[0].phone
    form.email= questionData[0].email
    form.address= questionData[0].address
    form.q1= questionData[0].q1
    form.q2= questionData[0].q2
    form.q3= questionData[0].q3
    form.q4= questionData[0].q4
    form.q5= questionData[0].q5
    form.accuracy= questionData[0].accuracy
    form.altitude= questionData[0].altitude
    form.altitudeAccuracy= questionData[0].altitudeAccuracy
    form.heading= questionData[0].heading
    form.latitude= questionData[0].latitude
    form.longitude= questionData[0].longitude
    form.acceptsms= questionData[0].acceptsms
    form.acceptemail= questionData[0].acceptemail
    form.modifyDate = questionData[0].modifyDate
    form.createDate= questionData[0].createDate
    form.softdeleteDate= questionData[0].softdeleteDate
    form.createUser= questionData[0].createUser
    form.modifyUser= userInfo
    form.softdeleteUser= questionData[0].softdeleteUser
    form.isdelete= questionData[0].isdelete
  }
  const instance = (event) =>{
    const form1 = event.currentTarget
    if (form1.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      setValidated(true)

      let sync1 = 'Fill the required Field Then Save !'
          let hi1 = (<ToastError sync={sync1} />)
          addToast(hi1)
          // setInterval(()=>{},1000)

    } else{
      event.preventDefault()
      let i =0;
      if(i < uniqId){
        event.preventDefault()
        alterForm()
      }else{
        event.preventDefault()
        createForm()
      }
    }
  }
  const alterForm = async()=>{
    let id = uniqId
    const x = await apiService.alterSurvey(form,id)
    if(x.status === 200){
            let sync = 'Update successfully completed !'
            let hi = (<Toast sync={sync} />)
            // setInterval(()=>{},500)
            addToast(hi)
            setInterval(()=>{( window.location.href = `/coed/admin/form`)},1400)
    }else{
      let sync = 'Process incomplete !'
      let hi = (<ToastError sync={sync} />)
      // setInterval(()=>{addToast(hi)},500)
      addToast(hi)
      setInterval(()=>{( window.location.href = `/coed/admin/form`)},1400)
    }
  }

 
  const createForm = async()=>{
  if(navigator.geolocation) {
    navigator.geolocation.watchPosition(function(a) { 
    form.accuracy = a.coords.accuracy;
    form.altitude = (a.coords.altitude ?? "null");
    form.altitudeAccuracy = (a.coords.altitudeAccuracy ?? "null");
    form.heading = (a.coords.heading ?? "null");
    form.latitude = a.coords.latitude;
    form.longitude = a.coords.longitude;
  })
  } else {
     let sync = 'Location incompleted try again!'
      let hi = (<ToastError sync={sync} />)
      // setInterval(()=>{addToast(hi)},500)
      addToast(hi)
      // setInterval(()=>{positionv()},800)
  }
  await positionv()
}
  // ============
  const positionv = async(a)=>{ 
    form.createUser = userInfo
    form.acceptemail = (form.acceptemail ?? false)
    form.acceptsms = (form.acceptsms ?? false)
    const x = await apiService.newinstanceSurvey(form)
    if(x.status === 201){
      let sync = 'Save successfully completed !'
      let hi = (<Toast sync={sync} />)
      setInterval(()=>{addToast(hi)},500)
      setInterval(()=>{( window.location.href = `/coed/admin/form`)},1400)
    } else if(x.status === 400){
      let sync = 'Process incomplete try again !'
      let hi = (<ToastError sync={sync} />)
      // setInterval(()=>{addToast(hi)},500)
      addToast(hi)
    }else{
    }
  }
  return (
    <CRow>
      <CToaster  ref={toaster} push={toast} className="toaster toast-container  p-3 position-fixed top-0 start-50 translate-middle-x" />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>One minute for Successful life</strong>
          </CCardHeader>
          <CCardBody>
              <CForm
              noValidate
              validated={validated}
              onSubmit={instance} 
              >
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Fullname</CFormLabel>
                    <CFormInput  className="text-primary"
                        type="text"
                        value={form.fullname}
                        onChange={(e)=>setForm((x)=>({...x,fullname:e.target.value}))}
                        size="sm"
                        required feedbackInvalid="Fullname required !"
                    />
                    </CCol>
                </CRow>

                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Mobile/Phone</CFormLabel>
                    <CFormInput className="text-primary"
                        type="text"
                        value={form.phone}
                        onChange={(e)=>setForm((x)=>({...x,phone:e.target.value}))}
                        size="sm"
                        required feedbackInvalid="Contact No required !"
                    />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                    <CFormInput className="text-primary"
                        type="email"
                        id="exampleFormControlInput1"
                        value={form.email}
                        onChange={(e)=>setForm((x)=>({...x,email:e.target.value}))}
                        required feedbackInvalid="E-mail required!"
                        size="sm"
                    />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Address</CFormLabel>
                    <CFormTextarea  value={form.address} className="text-primary"
                        required feedbackInvalid="Address required!"
                        onChange={(e)=>setForm((x)=>({...x,address:e.target.value}))}
                        id="exampleFormControlTextarea1" size="sm" rows="3"></CFormTextarea>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">{q1 ?? "Question 1"}</CFormLabel>
                    <CFormInput className="text-primary"
                        type="text"
                        id="exampleFormControlInput1"
                        value={form.q1}
                        // required feedbackInvalid="Address required!"
                        onChange={(e)=>setForm((x)=>({...x,q1:e.target.value}))}
                        size="sm"
                    />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">{q2 ?? "Question 2"}</CFormLabel>
                    <CFormInput className="text-primary"
                        type="text"
                        id="exampleFormControlInput1"
                        value={form.q2}
                        // onChange={(e)=>{setForm(e.target.value)}}
                        onChange={(e)=>setForm((x)=>({...x,q2:e.target.value}))}
                        size="sm"
                    />
                    </CCol>
                </CRow>

                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">{q3 ?? "Question 3"}</CFormLabel>
                    <CFormInput
                        type="text" className="text-primary"
                        id="exampleFormControlInput1"
                        value={form.q3}
                        // onChange={(e)=>{setForm(e.target.value)}}
                        onChange={(e)=>setForm((x)=>({...x,q3:e.target.value}))}
                        size="sm"
                    />
                    </CCol>
                </CRow>

                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">{q4 ?? "Question 4"}</CFormLabel>
                    <CFormInput
                        type="text"
                        className="text-primary"
                        id="exampleFormControlInput1"
                        value={form.q4}
                        // onChange={(e)=>{setForm(e.target.value)}}
                        onChange={(e)=>setForm((x)=>({...x,q4:e.target.value}))}
                        size="sm"
                    />
                    </CCol>
                </CRow>

                

                <CRow>
                    <CCol>
                    
                    <CFormCheck checked={form.acceptsms} className="text-primary" 
                    onChange={(e)=>setForm((x)=>({...x,acceptsms:e.target.checked}))}
                    // onChange={(e)=>{e.target.checked}}
                    />
                    <CFormLabel  htmlFor="exampleFormControlInput1">{q5 ?? "Question 5"}</CFormLabel>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormCheck checked={form.acceptemail} className="text-primary" 
                    onChange={(e)=>setForm((x)=>({...x,acceptemail:e.target.checked}))}
                    />
                    <CFormLabel htmlFor="exampleFormControlInput1">{q6 ?? "Question 6"}</CFormLabel>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol md={4}>
                     
                    </CCol>
                    <CCol md={4}>
                    <CButton color='danger' size='sm' onClick={() => reset()}>Reset</CButton>
                    &nbsp; &nbsp;
                    <CButton color='primary' type="submit" size='sm'>{!uniqId ? "Save":"Update"}</CButton> 
                    </CCol>
                    <CCol md={4}>
                    </CCol>
                </CRow>
              </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default formS