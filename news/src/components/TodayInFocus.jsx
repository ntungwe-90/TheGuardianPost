import React from 'react';
import Image1 from "../images/liza.png"
import Image2 from "../images/listen.png"
import Video from "../components/Video"
// import Image2 from "../src/images/listen.png"
 
function TodayInFocus() {
    return (
        <div className="container border ">
        <div className="row">
            <div className="col-md-2">
                <h3>Tody In Focus</h3>
            </div>
            <div className="col-md-2">
            <img src={Image1} className="pics"  alt="queenEliza"/> 
            </div>

            <div className="col-md-6 black_card">
            <p className='card-text text-container text2'>
                            <span className='span_card'> PODCAST/</span>
                            The Queen's Platinium Jubilee and the future of the Monarchy
                        </p>

<br/>



                        <small className='small smaller queen' >Tina Brown, author of The Palace Papers, on the importance of this jubilee to the royal family and how the Queen has maintained public
                         support through her 70 years on the throne despite many crises</small>
                        <div className='queen_links'>
                            <p>Subscribe:</p>
                            <p> <a href=''>Apple podcast</a></p>
                            <p> <a href=''>Google Podcast</a></p>
                            <p> <a href=''>Sportify</a></p>
                        </div>
            </div>

           
            <div className='col-md-2 medium_cards ' style={{ marginLeft: "1.5rem" }}>
                    <img src={Image2} style={{ width: '240px', height:"140px", marginLeft: "-2rem" }} alt="post" />
                    <p style={{ width: '240px', fontWeight: 'bold', height: '95px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: '#352d2d', marginLeft: "-2rem", color:"white" }}>
                        <p className='card-text text-container'>
                            Listen to Previous Episodes
                            
                        </p>



                    </p>



                
            </div>

           

           

           


           





            <Video/>
        </div>

       
    </div>

    
    );
}

export default TodayInFocus;