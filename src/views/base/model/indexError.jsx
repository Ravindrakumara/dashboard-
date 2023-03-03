import { CToast, CToastBody, CToastClose } from "@coreui/react"

  const Toast = ({sync})=>{
    return(
    <CToast  color="danger" className="align-items-center text-light" visible={true} deplay={2000} autohide={false}>
      <div className="d-flex flex-row">
        <CToastBody>
          {sync}
        </CToastBody>
        <CToastClose className="me-2 m-auto" white></CToastClose>
      </div>
    </CToast>)
  }
 
export default Toast