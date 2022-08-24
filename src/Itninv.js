import React from "react";
import "./Itninv.css";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import {
  CAccordionBody,
  CAccordion,
  CAccordionHeader,
  CAccordionItem,
  CButton,
} from "@coreui/react";
import Modal3 from "./Modal3";
function Itninv() {
  return (
    <CAccordion flush>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>
          <div className="header">
            <div>Itinerary</div>
            <div className="itn_modal">
              {/* <CButton>Terms&Con.</CButton> */}
              <Modal3 />
            </div>
          </div>
        </CAccordionHeader>
        <CAccordionBody>
          <div>
            <h6>Itinerary</h6>
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Itinerary</th>
                  <th scope="col">View</th>
                  <th scope="col">Select as Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Itinerary-1</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Itinerary-2</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Itinerary-3</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Itinerary-4</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>
          <div className="header">
            <div>Invoice</div>
            <div className="invoice_modal">
              {/* <CButton>Terms&Con.</CButton> */}
              <Modal3 />
            </div>
          </div>
        </CAccordionHeader>
        <CAccordionBody>
          <div>
            <h6>Invoice</h6>
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">View</th>
                  <th scope="col">Select as Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Invoice-1</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Invoice-2</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Invoice-3</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Invoice -4</td>
                  <td>
                    <Modal />
                  </td>
                  <td>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label"
                        for="flexRadioDefault1"
                      ></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  );
}

export default Itninv;
