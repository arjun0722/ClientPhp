import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CModalBody,
} from "@coreui/react";
import pdf from "./Pdf/intern.pdf";

function Modal() {
  const [visibleXL, setVisibleXL] = useState(false);

  return (
    <div>
      <CButton color="success" variant="outline" onClick={() => setVisibleXL(!visibleXL)}>
      Preview
      </CButton>
      {/* <button type="button" size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)} class="btn btn-outline-success">Terms&Co.</button> */}
      <CModal  size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
        <CModalHeader>
          <CModalTitle>Preview</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <iframe
            style={{ height: "100rem", width: "68rem" }}
            class="embed-responsive-item"
            src={pdf}
            allowfullscreen
          ></iframe>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default Modal;

//   <>
// <CButton onClick={() => setVisibleXL(!visibleXL)}>Extra large modal</CButton>
// <CButton onClick={() => setVisibleLg(!visibleLg)}>Large modal</CButton>
// <CButton onClick={() => setVisibleSm(!visibleSm)}>Small modal</CButton>
// <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
//   <CModalHeader>
//     <CModalTitle>Extra large modal</CModalTitle>
//   </CModalHeader>
//   <CModalBody>...</CModalBody>
// </CModal>
// <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
//   <CModalHeader>
//     <CModalTitle>Large modal</CModalTitle>
//   </CModalHeader>
//   <CModalBody>...</CModalBody>
// </CModal>
// <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
//   <CModalHeader>
//     <CModalTitle>Small modal</CModalTitle>
//   </CModalHeader>
//   <CModalBody>...</CModalBody>
// </CModal>
// </>
