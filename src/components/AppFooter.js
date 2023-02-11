import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a target="_blank" rel="noopener noreferrer">
          ...
        </a>
        <span className="ms-1">&copy; cyber leeway (pvt) Ltd.</span>
      </div>
      <div className="ms-auto">
        {/* <span className="me-1">Powered by</span> */}
        {/* <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
