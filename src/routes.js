/* eslint-disable */ 
// import { exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// 
// app01
// const index = React.lazy(() => import('./student/index'))
// Form
const FormSurvey = React.lazy(() => import('./views/base/formapp/surveyForm'))
// const Login = React.lazy(() => import('./views/pages/login/Login'))
const Surveylist = React.lazy(() => import('./views/base/formapp/surveyData'))
// 
const QuestionList = React.lazy (() => import('./views/base/question/questionList'))
const QuestionForm = React.lazy (() => import('./views/base/question/questionForm'))

const Follower = React.lazy (() => import('./views/master/follower/followers'))
const FollowerForm = React.lazy (() => import('./views/master/follower/followerForm'))
const Salutation = React.lazy (() => import('./views/master/salutation/salutation'))
const GeoAnalysis = React.lazy (() => import('./views/master/socialmap/analysis'))
const UserList  = React.lazy (() => import('./views/master/account/user'))
const routes = [
  // { path: 'coed/admin/', exact: true, name: 'index', element:index },
  { path: 'coed/admin/dashboard', name: 'Dashboard', element: Dashboard,  exact: true },
  { path: 'coed/admin/question', name: 'Question', element: QuestionList, exact: true },
  { path: 'coed/admin/question/:id', name: 'Alter ', element: QuestionForm, exact: true },
  { path: 'coed/admin/follower', name: 'Follower', element: Follower, exact: true },
  { path: 'coed/admin/follower/:id', name: 'Follower', element: FollowerForm, exact: true },
  { path: 'coed/admin/salutation', name: 'Salutation', element: Salutation, exact: true },
  { path: 'coed/admin/geo/analysis', name: 'analysis', element: GeoAnalysis, exact: true },
  { path: 'coed/admin/form', name: 'Form', element: Surveylist, exact:true },
  { path: 'coed/admin/form/new', name: 'Form', element: FormSurvey, exact:true },
  { path: 'coed/admin/form/:id', name: 'Surveyform', element: FormSurvey, exact: true },
  { path: 'coed/admin/user', name: 'User', element: UserList, exact:true},
]

export default routes
