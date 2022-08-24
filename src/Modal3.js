import React,{ useState} from 'react'
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CModalBody
  } from "@coreui/react";
  import TextEditor from './TextEditor';
function Modal3() {
//  const [value , setValue] = useState("")
    // const [visible, setVisible] = useState(false)
    const [visibleLg, setVisibleLg] = useState(false)
  return (
  <div>


    {/* <CButton type="button" className="btn btn-outline-success" onClick={() => setVisible(!visible)}>Terms&Co.</CButton> */}
    {/* <button onClick={()=>setVisible(!visible)}>Terms&Co.</button> */}
    {/* <button type="button" onClick={()=>setVisible(!visible)} class="btn btn-outline-success">Terms&Co.</button> */}
    <button type="button" onClick={() => setVisibleLg(!visibleLg)} class="btn btn-outline-info">Terms&Co.</button>
    {/* <CButton onClick={() => setVisibleLg(!visibleLg)}>Large modal</CButton> */}
    <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
      <CModalHeader>
        <CModalTitle>Edit Format</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <TextEditor />
      {/* <div>{value}</div> */}
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">submit</CButton>
      </CModalFooter>
    </CModal>
 


  </div>
  )
}

export default Modal3