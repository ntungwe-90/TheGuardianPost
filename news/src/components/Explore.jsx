import React from 'react';
import Image1 from '../images/muchroom.png';
import Image2 from '../images/suit.png';
import Image4 from '../images/cardinal.png';
import Image5 from '../images/kimono.png';
import Image6 from '../images/explore.png';
import Image7 from '../images/group.png';

function Explore() {
    return (
        <div className="container border mt-3">
        <div className="row">
        <div className='col-md-2 '>
       <h3>Explore</h3> 
    </div>

    <div className="col-md-4">
        <div className="card">
        <img src={Image1} className="pics"  alt="girl"/>

        <div className=" text-height ">
        <p className='text text-danger'> <a href="" className='text-danger'><span className='text-danger'>'We spark curiosity'/</span> How the psychedelics industry is taking on Davos</a>
           
           
        
           
            
        </p>
            </div>  
        </div>
            
        <div>
                      
                    </div> 
   

    </div>

  
    <div className='col-md-2' style={{ marginLeft: "8rem" }}>
                        <img src={Image2} style={{ width: '250px', marginLeft: "-4rem" }} alt="post" />
                        <p style={{ width: '250px', fontWeight: 'bold', height:'282px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-4rem" }}>  
                            <p className='card-text text-container'>
                           <span className='span_texts text-danger'> 'Amazing people'/</span>
                           BTS-mania sweeps the White House as boy band speaks on anti Asian hate
                            </p>
                            <p className='small smaller'>  
                           Young fans peer through the gates while K-pop sensations
                           meet the president and address the press

                           
                              </p>
                              
                            
                        </p>



                    </div>

        
                       
                        <div className='col-md-2' >
                        <img src={Image4} style={{ width: '250px',marginLeft: "-1rem"}} alt="post" />
                        <p style={{ width: '250px', fontWeight: 'bold',height:'282px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' ,marginLeft: "-1rem"}}> 
                        <p className='card-text text-container'>
                        <span className='span_texts text-danger'>The long read/</span>
                       The man who build his own cathedral

                            </p>
                            <p className='small smaller'> 
                           <strong>The long read:</strong> for nearly 60years, a former monk toiled almost
                           single-handedly on an extraordinary building outside Madrid. Is it a folly or a 
                           masterpiece?
                              </p>
                             
                            
                           
                           

                        </p>



                    </div>

                 

                    <div>
                        
                    </div>
                    
                    
                    <div className="row opinionContainer mt-2">
                    <div className="col-md-2">
                        <p></p>
                    </div>


                <div className="col-md-5 mt-0 " >
                <div class="card-body d-flex  align-items-center  culture_highlights gap-2"  >
                        <img src={Image5} alt="..." className='mts pictures' />

                        <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts text-danger'>Stalked by hunger but fighting obesity/</span>Kenya's
                        hidden food crisis
                           
                        </p>

                    </div>
                    <div class="card-body d-flex  align-items-center culture_highlights gap-2" >
                        <img src={Image6} alt="..." className='mts pictures'/>

                        <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts text-danger'> Animals/</span>
                        She experimented on primates for decades. Now she wants to
                        shut down the labs
                            
                        </p>

                    </div>

                   
                    <div class="card-body d-flex  align-items-center culture_highlights gap-2" >
                        <img src={Image7} alt="..." className='mts pictures' />
                        <div className='all_text'>
                        <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts text-danger'>Covid/</span>
                         With UK cases at their lowest for a year, what could the future look like?
                        </p>
                        </div>
                    </div>


                    
                   
                    <button className='btn btn-dark btn_black '> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>More Explore
 
  </button>





                </div>



                    <div className="col-md-2 advert">
                    <p>.</p>
                        <p className='box'>Advertisement</p>
                    </div>

                    <div className="col-md-2">
                        
                    </div>

                    </div>
                   
   
   

   
   
        </div>
    </div>
   
    );
}

export default Explore;