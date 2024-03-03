"use client"
import React from 'react'
// const COS232 = "https://drive.google.com/file/d/1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh/view?usp=drive_link";
const COS232 = "https://drive.google.com/uc?export=download&id=1qMZ1kYYW-qQv20JsMdm7LReQ83HPjQVh";


const Download = () => {
    const downloadFileAtURL = (url) =>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href =url
        aTag.setAttribute('download',fileName)
        document.body.appendChild (aTag)
        aTag.click();
        aTag.remove();

    }
  return (
    <div className="button">
      <button onClick={()=>{downloadFileAtURL(COS232)}} >Download File</button>
    </div>
  )
}

export default Download;
