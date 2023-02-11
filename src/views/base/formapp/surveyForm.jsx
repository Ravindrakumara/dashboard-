/* eslint-disable */
import React, { useEffect, useState} from "react";
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
    CRow,CToast,CToastHeader,CToastBody
  } from '@coreui/react'
  import apiService from 'src/service/apiService'
// import { useRef } from "react";
function formS() {
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
  useEffect(()=>{
    serveyQuestionList()
    spiltway()
  },[])

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
    form.modifyUser= "ravtindra"
    form.softdeleteUser= questionData[0].softdeleteUser
    form.isdelete= questionData[0].isdelete
  }
  const instance = () =>{
    let i =0;
    if(i < uniqId){
      alterForm()
    }else{
      createForm()
    }
    
  }
  const alterForm = async()=>{
    let id = uniqId
    const x = await apiService.alterSurvey(form,id)
    if(x.status === 200){
      // return(
        // <CToast>
        //   <CToastHeader closeButton>
        //     <svg
        //       className="rounded me-2"
        //       width="20"
        //       height="20"
        //       xmlns="http://www.w3.org/2000/svg"
        //       preserveAspectRatio="xMidYMid slice"
        //       focusable="true"
        //       role="img"
        //     >
        //       <rect width="100%" height="100%" fill="#007aff"></rect>
        //     </svg>
        //     <strong className="me-auto">CoreUI for React.js</strong>
        //     <small>7 min ago</small>
        //   </CToastHeader>
        //   <CToastBody>Successful Update is done!</CToastBody>
        // </CToast>
      // )
    }else{
      alert("Error")
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
    alert("Hello! I am an alert box!!");
  }
  // console.log(geoset,"gttt")
  positionv()
}
  // ============
  const positionv =(a)=>{ 
    form.createUser ="ravindra"
    const x = apiService.newinstanceSurvey(form)
    console.log(x,'KO')
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>One minute for Successful life</strong>
          </CCardHeader>
          <CCardBody>
              <CForm>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Full name</CFormLabel>
                    <CFormInput  className="text-primary"
                        type="text"
                        value={form.fullname}
                        onChange={(e)=>setForm((x)=>({...x,fullname:e.target.value}))}
                        size="sm"
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
                        // onChange={(e)=>{setForm(e.target.value)}}
                        size="sm"
                    />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                    <CFormLabel htmlFor="exampleFormControlInput1">Address</CFormLabel>
                    <CFormTextarea  value={form.address} className="text-primary"
                        // onChange={(e)=>{setForm(e.target.value)}} 
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
                        // onChange={(e)=>{setForm(e.target.value)}}
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
                    <CButton color='danger' size='sm'>Reset</CButton>
                    &nbsp; &nbsp;
                    <CButton color='primary' onClick={()=>{instance()}} size='sm'>{!uniqId ? "Save":"Update"}</CButton> 
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