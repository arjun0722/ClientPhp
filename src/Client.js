import React, { useState } from "react";
import "./Client.css";
import Term from "./Term";
import Itninv from "./Itninv";

import { CTooltip, CButton } from "@coreui/react";
function Client() {
const CData ={
  name : "" , 
  code :"" , 
  address1 : "",
  address2 : "" ,
  country : "",
  state : "" ,
  city : "" , 
  pincode : "" ,
  phone : "",
  faxno : "" , 
  website :"",

}
const [Client , setClient] = useState(CData)
const getcdata =(e)=>{

  const {value , name} = e.target
  setClient({...Client ,
     [name] : value })
  
}
const submitdetails =()=>{
  console.log(Client)
}
  return (
    <div>
      <section className="contact">
        <div className="container py-5">
          <div className="row">
            <div className="consize col-lg-6 mx-auto w-80  ">
              <div className="card">
                <div className="card-body">
               
                  <div>
                    <Term />
                  </div>
                  <div className="form">
                    <h6>Client Details</h6>
                    <div class="row">
                      <div class="col">
                        <span>* Name</span>
                        <input
                    name="name"
                        onChange={getcdata}
                      
                       value={Client.name}
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>* Code</span>
                        <input
                      name="code"
                        value={Client.code}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span>* Address-1</span>
                        <input
                        name="address1"
                        value={Client.address1}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>Address-2</span>
                        <input
                        name="address2"
                         value={Client.address2}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span>* Country</span>
                        <input
                        name="country"
                          value={Client.country}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>* State</span>
                        <input
                        name="state"
                      value={Client.state}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>* City</span>
                        <input
                        name="city"
                       value={Client.city}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span>Pincode</span>
                        <input
                        name="pincode"
                      value={Client.pincode}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>* Office-Phone</span>
                        <input
                        name="phone"
                         value={Client.phone}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />

                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>Fax Number</span>
                        <input
                        name="faxno"
                         value={Client.faxno}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span>Website</span>
                        <input
                        name="website"
                       value={Client.website}
                          onChange={getcdata}
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <button onClick={submitdetails} >Hey</button>
                    </div>
                    <h6>Contact Person</h6>
                    <div class="row">
                      <div class="col">
                        <span>* Name</span>
                        <input
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                        <span className="focus-border"></span>
                      </div>
                      <div class="col">
                        <span>* Email</span>
                        <input
                          type="text"
                          class="effect-1"
                          aria-label="Last name"
                        />
                        <span className="focus-border"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span>* Contact Number</span>
                        <input
                          type="text"
                          class="effect-1"
                          aria-label="First name"
                        />
                      </div>
                      <span className="focus-border"></span>
                    </div>
                    <div>
                      <div className="more_info">
                        <div>
                          <h6>Bank Details</h6>
                        </div>
                        <div className="info_btn">
                          {" "}
                          <CTooltip
                            content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.Vivamus sagittis lacus vel augue laoreet rutrum faucibus Vivamus sagittis lacus vel augue laoreet rutrum faucibus"
                            placement="right"
                          >
                            {/* <CButton color="secondary">Tooltip on right</CButton> */}
                            {/* <CButton className="more_btn" color="success" variant="outline">?</CButton> */}
                            <button className="more_btn">?</button>
                          </CTooltip>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">
                          <span>* Account Name</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="First name"
                          />
                          <span className="focus-border"></span>
                        </div>
                        <div class="col">
                          <span>* Account Number</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="Last name"
                          />
                          <span className="focus-border"></span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <span>* Bank Name</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="First name"
                          />
                          <span className="focus-border"></span>
                        </div>
                        <div class="col">
                          <span>* Bank Address</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="Last name"
                          />
                          <span className="focus-border"></span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <span>* IFSC Code</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="First name"
                          />
                          <span className="focus-border"></span>
                        </div>
                        <div class="col">
                          <span>* Swift Code</span>
                          <input
                            type="text"
                            class="effect-1"
                            aria-label="Last name"
                          />
                          <span className="focus-border"></span>
                        </div>
                      </div>
                    </div>
                    <h6>Additional Details</h6>
                    <div className="invoice">
                      <Itninv />
                    </div>
                    <div className="invoice">{/* <Invoice/> */}</div>
                    <div className="invoice">{/* <Term/> */}</div>
                    <button className="button">submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
