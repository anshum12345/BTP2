import React, { useState } from 'react'
import LangList from './LangList'
// import voice from '../../assets/image.png'
import axios from 'axios';
import copy_icon from '../../assets/copy_icon.gif';
import download_icon from '../../assets/download_logo.png';


function Java() {

  const [code,setCode] = useState('')
  const [output,setOutput] = useState('');

  const handleSubmit = async ()=>{
    const payload = {
      language:"dart",
      code
    };

    try{
      const {data} = await axios.post("http://localhost:5000/rundart",payload)
      setOutput(data.output);
      console.log("Faizan Alam",data);
      // setCode("");
    }catch(err){
      console.log(`error is in dart.js .The error : ${err}`);
    }
  }

  const clear = ()=>{
    const box = document.querySelector(".rightplayground");
    box.innerHTML = "";
  }

  const copyContent = ()=>{
    navigator.clipboard.writeText(code);
  }

  const codeToFile = ()=>{
    // const text = document.querySelector('.codemirror').value;
    const text = document.querySelector('#dart').value;
    // const text = setcode(code);
    const blob = new Blob([text],{type:"text/dart"});

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "codofile-dart.dart";
    link.click();
  }

  return ( 
    <>
      <div className="voiceContainer">
            <div className="voiceBody">
                <div className="leftLang">
                    <LangList/>
                </div>
                <div className="PlaygroundMain">
                <div className='runHeaderJS'>
                    <div className='jsleftheaderfile jsfile'>
                      <mark><h2>index.dart</h2></mark>
                      <div className='runbtn'>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={copyContent} src={copy_icon} alt='voice'/>
                      </button>
                      <button className='vbtn'>
                      <img className='voicebtn' onClick={codeToFile} src={download_icon} alt='voice'/>
                      </button>
                        <button className='btn' onClick={handleSubmit}>RUN</button>
                      </div>
                    </div>
                    <div className='jsrightheaderfile jsfile'>
                      <mark><p>OUTPUT</p></mark>
                      <button className='clear' onClick={clear}>Clear</button>
                    </div>
                  </div>
                  <div className='jsplayground playground'>
                    <div className='leftplayground snippet'>
                      <textarea className='dartpython' name="dart" id="dart" value={code} onChange={(e)=>{setCode(e.target.value)}} placeholder='void main(){print("Hello codoPlayers");}'></textarea>
                    </div>
                    <div className='rightplayground snippet'>
                      <p>{output}</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Java