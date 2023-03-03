/* eslint-disable */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: 'coed/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Master',
  },
  {
    component: CNavItem,
    name: 'Question List',
    to: 'coed/admin/question',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'follower',
  //   to: 'coed/admin/follower',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Salutation',
  //   to: 'coed/admin/salutation',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Transaction',
  },
  {
    component: CNavGroup,
    name: 'Survey',
    to: 'coed/admin/form',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Survey data',
        to: 'coed/admin/form',
      },
      {
        component: CNavItem,
        name: 'Form',
        to: 'coed/admin/form/s',
      },
    ]
  },
  {
    component: CNavItem,
    name: 'Social analysis',
    to: 'coed/admin/geo/analysis',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  
  {
    component: CNavGroup,
    name: 'Account',
    to: 'coed/admin/user',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Users',
      //   to: 'coed/admin/user',
      // }
    ]
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
 
  {
    component: CNavGroup,
    name: 'Settings',
    to: 'coed/admin/setting',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Email Template',
        to: 'coed/admin/setting/email/temp',
      },
      {
        component: CNavItem,
        name: 'Email Gateway',
        to: 'coed/admin/setting/email/Gateway/email',
      },
      {
        component: CNavItem,
        name: 'SMS Gateway',
        to: 'coed/admin/setting/email/Gateway/sms',
      },
      {
        component: CNavItem,
        name: 'Message',
        to: 'coed/admin/setting/email/Gateway/message',
      },
    ]
  },
  
]

export default _nav

