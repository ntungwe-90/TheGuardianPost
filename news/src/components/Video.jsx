import React from 'react';
import Image1 from "../images/liza.png"
import Image2 from "../images/amber.jpeg"
// color:"#00b2ff"
function video() {
    return (

       <div className="container-fluid">
            {/* <h2 className='video_text'><a>Video</a></h2> */}
           <div className='d-flex justify-contenet-around align-items-center black_background'>
              
            
               <div className="col-md-2 card_structure">
                   
               </div>
               <div class="container2">
  <img src={Image2} alt="Norway" width="120%" height="400px"/>
  <div class="text-block">
  <p><span style={{ color:"#A1845c"}}>Depp Vs Amber/</span>The key Turning Points in the Gripping sevev weeks trail</p>
  </div>
</div>



           </div>
          
       </div>
    );
}

export default video;