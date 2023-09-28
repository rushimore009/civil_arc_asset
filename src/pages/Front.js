import React from "react";
import Base from "../components/Base";
import video1 from '../image/frontb.mp4'
import video2 from '../image/frontm.mp4'


const Front=()=>{
    return(
        <Base>
         <div className="main">
            <video src={ video2} autoPlay loop muted/>
                
         </div>
         </Base>
    );
};
export default Front