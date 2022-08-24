import React from "react";
import "./TextEditor.css";
import { CButton } from "@coreui/react";
import { FaBold, FaItalic, FaUnderline, FaUndo, FaRedo } from "react-icons/fa";
import {
  AiOutlineFontSize,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlignCenter,
  AiFillDelete,
} from "react-icons/ai";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react";

function TextEditor() {

  const getHtml =()=>{
    const getvar = document.getElementById("content").innerHTML
    console.log(getvar)
    document.getElementById("output").innerText = getvar
  }

  // console.log(getHtml)
  // const [value,setValue] = useState("")
  // const getValue=(value)=>{
  //   setValue(value)
  // } 
  const clickBold = () => {
    document.execCommand("bold");
  };
  const clickItalic = () => {
    document.execCommand("italic");
  };
  const clickUnderline = () => {
    document.execCommand("underline");
  };
  const clickDelete = () => {
    document.execCommand("delete");
  };
  const clickUndo = () => {
    document.execCommand("undo");
  };
  const clickRedo = () => {
    document.execCommand("redo");
  };
  const clickCenter = () => {
    document.execCommand("justifyCenter");
  };
  const clickLeft = () => {
    document.execCommand("justifyLeft");
  };
  const clickRight = () => {
    document.execCommand("justifyRight");
  };
  // const clickColor =()=>{
  //   document.execCommand('foreColor', true, clickColor.value);
  // }
  const clickFont2 = () => {
    document.execCommand("fontSize", false, "2");
  };
  const clickFont3 = () => {
    document.execCommand("fontSize", false, "3");
  };
  const clickFont4 = () => {
    document.execCommand("fontSize", false, "4");
  };
  const clickFont5 = () => {
    document.execCommand("fontSize", false, "5");
  };
  const clickFont6 = () => {
    document.execCommand("fontSize", false, "6");
  };
  const clickFont7 = () => {
    document.execCommand("fontSize", false, "7");
  };

  return (
    <div>
      <div class="container">
        <div className="html_main">
          <div> <h4 id="title">Text Editor</h4></div>
          <div> <CButton className="htmlbtn" onClick={getHtml} size="sm" color="success" variant="outline">Html</CButton></div>
        </div>
       
     
        <div class="controls">
          {/* <div class="main-controlss">

        <button class="btn btn-primary">File</button>
        <input id="filename-input" type="text"/>
    </div> */}
          <div class="control-btn-container">
            <button
              data-toggle="tooltip"
              title="Bold"
              onClick={clickBold}
              id="bold-btn"
              class="btn btn-dark control-btn"
            >
              <FaBold />
            </button>

            <button
            data-toggle="tooltip"
            title="Underline"
              onClick={clickUnderline}
              id="underline-btn"
              class="btn btn-dark control-btn"
            >
              <FaUnderline />
            </button>
            <button
             data-toggle="tooltip"
             title="Italic"
              onClick={clickItalic}
              id="italic-btn"
              class="btn btn-dark control-btn"
            >
              <FaItalic />
            </button>
            <button
             data-toggle="tooltip"
             title="Delete"
              onClick={clickDelete}
              id="delete-btn"
              class="btn btn-dark control-btn"
            >
              <AiFillDelete />
            </button>
            <button
             data-toggle="tooltip"
             title="Undo"
              onClick={clickUndo}
              id="right-btn"
              class="btn btn-dark control-btn"
            >
              <FaUndo />
            </button>
            <button
             data-toggle="tooltip"
             title="Redo"
              onClick={clickRedo}
              id="left-btn"
              class="btn btn-dark control-btn"
            >
              <FaRedo />
            </button>
            <button
             data-toggle="tooltip"
             title="Center"
              onClick={clickCenter}
              id="left-btn"
              class="btn btn-dark control-btn"
            >
              <AiOutlineAlignCenter />
            </button>
            <button
             data-toggle="tooltip"
             title="Left"
              onClick={clickLeft}
              id="left-btn"
              class="btn btn-dark control-btn"
            >
              <AiOutlineAlignLeft />
            </button>
            <button
             data-toggle="tooltip"
             title="Right"
              onClick={clickRight}
              id="left-btn"
              class="btn btn-dark control-btn"
            >
              <AiOutlineAlignRight />
            </button>
            {/* <button onClick={clickFont} id="left-btn" class="btn btn-dark control-btn"><AiOutlineFontSize/></button> */}

            <CDropdown variant="btn-group">
              <CDropdownToggle
               data-toggle="tooltip"
               title="Font-Size"
                class="btn btn-dark control-btn"
                color="secondary"
                size="sm"
              >
                <AiOutlineFontSize />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={clickFont2} href="#">
                  2
                </CDropdownItem>
                <CDropdownItem onClick={clickFont3} href="#">
                  3
                </CDropdownItem>
                <CDropdownItem onClick={clickFont4} href="#">
                  4
                </CDropdownItem>
                <CDropdownItem onClick={clickFont5} href="#">
                  5
                </CDropdownItem>
                <CDropdownItem onClick={clickFont6} href="#">
                  6
                </CDropdownItem>
                <CDropdownItem onClick={clickFont7} href="#">
                  7
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
         
        </div>

        <div  id="content" contenteditable="true" spellcheck="false">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis vitae laudantium aliquam accusantium, eos officia
          assumenda sapiente nemo reprehenderit suscipit autem beatae libero
          placeat ullam obcaecati. Inventore fugit itaque temporibus officia
          optio quae quidem! Impedit enim dicta voluptate itaque, rerum ducimus
          non, recusandae accusantium doloribus vero consectetur, excepturi ad!
        </div>
      </div>
 

      <div id="output"></div>
 
    </div>
  );
}

export default TextEditor;
