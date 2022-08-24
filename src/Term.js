import React from 'react'
import "./Terms.css"
import Modal from './Modal'
import { CAccordionBody, CAccordion,CAccordionHeader,CAccordionItem, CButton} from "@coreui/react"
function Term() {
  return (<div>
<h6 className='heading'>Client Logo & Actions</h6>
    <CAccordion flush>
    <CAccordionItem itemKey={1}>
      <CAccordionHeader>
        <div >
          <div >Client Logo & Actions</div>
          <div className='itn_modal'>
            {/* <CButton>Terms&Con.</CButton> */}
            {/* <Modal/> */}
          </div>
        </div>
      </CAccordionHeader>
      <CAccordionBody>
     
      <div>

<div className='main_con'>
  <div className='Logo'>
  <img
class="rounded-circle"
src="https://imgs.search.brave.com/0Wsl8C09ZvdcbyVQrxcZ8e6QACgyS71NrkwNwR9DwZA/rs:fit:1200:1085:1/g:ce/aHR0cHM6Ly9kLmli/dGltZXMuY28udWsv/ZW4vZnVsbC8xNTUz/MjQxL21vc2Nvdy10/by1yZXBsYWNlLW1p/Y3Jvc29mdC1wcm9k/dWN0cy5qcGc_dz03/MzY"
alt="circular image non responsive"
/>
  </div>
  <div className='grid'>
  <div class="container text-center">
<div class="row">
<div class="col">
<CButton color="warning" size="sm">Upload</CButton>
</div>
<div class="col">
<CButton color="warning" size="sm">Terms&Co.</CButton>
</div>
<div class="col">
<CButton color="warning" size="sm">Subscription</CButton>
</div>
</div>
</div>
<br></br>
<div class="container text-center">
<div class="row">
<div class="col">
<CButton color="warning" size="sm">Clear</CButton>
</div>
<div class="col">
<CButton color="warning" size="sm">Events</CButton>
</div>
<div class="col">
<CButton color="warning" size="sm">status</CButton>
</div>
</div>
</div>
  </div>
</div>
</div>
      </CAccordionBody>
    </CAccordionItem>
    </CAccordion>
    
    
    </div>
  )
}

export default Term






















