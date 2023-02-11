/* eslint-disable */
import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

function sinhalaform() {
return (
  <CRow>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader>
        <strong>“Tap the strength within and rise again”</strong><br/>
        <strong>“Let’s turn the pain in to power”</strong>
      </CCardHeader>
      <CCardBody>
        {/* <DocsExample href="forms/form-control"> */}
          <CForm>

          <CRow>
            <CCol xs>
            <CFormSelect size='' className='m-2'>
                <option>IP</option>
                <option>VIP</option>
                <option>VVIP</option>
                <option>Rev</option>
              </CFormSelect>
            </CCol>

            <CCol xs>
            <CFormSelect size='' className='m-2'>
                <option>Mr</option>
                <option>Miss</option>
                <option>Ms</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <CRow>
            <CCol xs>
              <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>Fullname</CFormLabel>
                <CFormInput className='m-2'
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </CCol>
          </CRow>

          <CRow>
            <CCol xs>
              <CFormLabel className='m-2' htmlFor="exampleFormControlInput1">Address</CFormLabel>
              <CFormTextarea id="exampleFormControlTextarea1" rows="3" className='m-2'></CFormTextarea>
            </CCol>
          </CRow>
          
           <CRow>
           <CCol xs>
           <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>E-mail</CFormLabel>
              <CFormInput className='m-2'
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </CCol>
           </CRow>
            
            <CRow>
              <CCol xs>
            <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>Mobile No</CFormLabel>
              <CFormInput
                type="email"
                className='m-2'
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs>
            <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>How do you feel about life in the present days?</CFormLabel>
              <CFormInput
                type="email"
                className='m-2'
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs>
            <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>Are you engaged in any coping mechanisms ?</CFormLabel>
              <CFormInput
                type="email"
                className='m-2'
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs>
            <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>Would you like to consider spiritual engagement as a form of coping mechanism ?</CFormLabel>
              <CFormInput
                type="email"
                className='m-2'
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              </CCol>
            </CRow>

            <CRow>
              <CCol xs>
            <CFormLabel htmlFor="exampleFormControlInput1" className='m-2'>Are you prepared to allocate a minute daily to become happy and make those around you happy?</CFormLabel>
              <CFormInput
                type="email"
                className='m-2'
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              </CCol>
            </CRow>
           
          </CForm>
          <CRow>
            <CCol xs>
              <CButton type="submit" className="m-3">
                Submit
              </CButton>
            </CCol>
            <CCol xs>
              <CButton type="submit" color='danger' className="m-3">
                Reset
              </CButton>
            </CCol>
          </CRow>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
  )
}

export default sinhalaform