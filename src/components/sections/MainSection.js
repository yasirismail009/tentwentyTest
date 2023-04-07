import React, { useEffect, useState } from "react";
import Image1 from '../../Assets/images/bg_img.png';
import Image2 from '../../Assets/images/next_img.png';

export default function MainSection() {
  const [count,setCount] = useState(1)
  const [display,setDisplay] = useState(Image1)
  
  const handleNextImage =()=>{
    if (count<4){
      if(count===1){
        setDisplay(Image2)
      } else if(count===2){
        setDisplay(Image1)
      }else if(count===3){
        setDisplay(Image2)
      } else{
        setDisplay(Image1)
      }
      setCount(count+1)
    }
 
  }

const path = 'url(/src/Assets/images/bg_img.png)'

  return (
    <div className="main_section"  style={{backgroundImage:`url(${display})`}}>
      <div className="content">
        <p>Welcome To TenTwenty Farms</p>
        <h1>From our Farms to your hands</h1>
        <div className="next_img_parent">
        <div className="parent_border">
          <div className="cornerTop" style={{width: count===1? "75px": "142px"}}></div>
          <div className="cornerLeft" style={{height:count===1? "75px": "142px"}}></div>
          <div className="cornerRight" style={{height:count===3? "75px": count===4?"142px":"0px" }}></div>
          <div className="cornerBottom" style={{width:count===3? "75px": count===4?"142px":"0px"}}></div>
        <div className="next_image" onClick={e=>{handleNextImage()}}>
        <p>Next</p>
        </div>
        </div>
        <div className="next_count">
          <p>0{count}</p>
          <div className="line">

          </div>
          <p>04</p>
        </div>
        </div>
      </div>
    </div>
  );
}
