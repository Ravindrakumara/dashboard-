/* eslint-disable */
import React, { useEffect, useState} from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import apiService from 'src/service/apiService'
import avatar8 from 'src/assets/images/avatars/10.png'

const AppHeaderDropdown = () => {
  const [profileData,setProfileData]  = useState([])
  useEffect(()=>{
    profile()
  },[])
  
  const profile=async()=>{
    let x =[]
    const queData = await apiService.getProfileInfo()
    x.push(queData.data)
    setProfileData(x)
  }

  const logout = () =>{
    const reponse = apiService.logoutUser()
    if(reponse.status = 204){
      localStorage.removeItem('auth_Token');
      window.location.href = `/coed/admin/login`; 
    }
  
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownHeader className="bg-light fw-semibold py-2" >Account</CDropdownHeader>
      {profileData && profileData.map((x,index)=>(
       
        <div key={x.id}>
          <CDropdownItem>
             <CIcon icon={cilUser} className="me-2 text-primary" />
             {x.username}     
          </CDropdownItem>

          <CDropdownItem>
          <CIcon icon={cilEnvelopeOpen} className="me-2 text-primary" />
          {x.email}     
       </CDropdownItem> 
        </div>
         
        
        )) }
        <CDropdownDivider />
        <CDropdownItem >
          <CIcon icon={cilLockLocked} className="me-2 text-danger" />
          <a onClick={()=>{logout()}}> Lock Account</a>
        </CDropdownItem>
        
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
