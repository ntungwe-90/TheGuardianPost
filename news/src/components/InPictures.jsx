import React from 'react';
import Image1 from '../images/inpic.png'
import Image2 from '../images/pink.png'
import Image3 from '../images/monkey.png'
import Image4 from '../images/hose.png'
import Image5 from '../images/clod.png'
import Image6 from '../images/rode.png'
import Footer from './Footer';
function InPictures() {
    return (
        <div className='container border cards_row '>
            <div className='row mt-3'>
                <div className='col-md-2'>
                    <h2>In Pictures</h2>
                </div>

                <div className='col-md-2' >
                    <p style={{ width: '250px', fontWeight: 'bold', height: '320px', fontSize: '1.25rem', lineHeight: '1.5rem', color: "#fff", backgroundColor: '#121212', marginLeft: ".0333rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts'>The most stricking images from around the world/</span>
                            Twenty Photographs

                        </p>
                        <p className='small smaller2'>
                            collective bounding aroung intense fandom is key to the
                            shows's succes, say experts, but some fear there's dark
                            side to the compulsion
                        </p>





                    </p>



                </div>


                <div className='col-md-6'>
                    <div className=''>
                        <div className='card-image'>
                            <img src={Image1} alt="post" height="320px" width="535px" style={{ marginLeft: "1rem" }} />
                        </div>
                    </div>


                </div>

                <div className='col-md-2' >
                    <img src={Image2} style={{ width: '230px', marginLeft: "-6rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '180px', fontSize: '1.25rem', lineHeight: '1.5rem', color: "white", backgroundColor: 'rgb(24, 16, 16)', marginLeft: "-6rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts text-danger'>Friday's best photos/</span>
                            <p className=''>Bagpipes in Brazil, 2D restaurant and jubilee fun</p>

                        </p>



                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>


                    </p>



                </div>


                <div className="container  ">
                    <div className="row">
                        <div className="col-md-2">

                        </div>

                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2rem" }}>
                            <img src={Image3} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '120px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                                <p className='card-text text-container'>
                                    <span className='span_texts'> From orcas to hyenas/</span>
                                    Meet the queens of the animal kingdom
                                </p>



                            </p>



                        </div>

                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2.5rem", color: "white" }}>
                            <img src={Image4} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '120px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: '#121212', marginLeft: "-2rem" }}>
                                <p className='card-text text-container'>
                                    <span className='span_texts text-danger'>In pictures/</span>
                                    Red Arrows and Chelsea Pensioners
                                </p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-camera-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>

                            </p>



                        </div>

                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2.5rem", color: "white" }}>
                            <img src={Image5} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '234px', fontWeight: 'bold', height: '120px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(24, 16, 16)', marginLeft: "-2rem" }}>
                                <p className='card-text text-container'>
                                    <span className='span_texts text-danger'> Environment/</span>
                                    The week in wildlife
                                </p>


                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-camera-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>
                            </p>



                        </div>



                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2.5rem" }}>
                            <img src={Image6} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', fontSize: '1.25rem', height: '120px', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                                <p className='card-text text-container mt-0'>
                                    <span className='span_texts text-danger'> Out with aspalt/US</span>
                                    schoolyards transformed into green oases
                                </p>



                            </p>



                        </div>






                    </div>
                </div>


                {/* MOST VIEWED CONTAINER */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h3>Most Viewed</h3>
                        </div>

                        <div className="col-md-7 border">
                            <h3>Most Viewed</h3>
                            <table class="table table-bordered">
  <thead>
    <tr>
      
      
      <th scope="col">Most Viewed</th>
      <th scope="col">Across the Guardian</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <div className='d-flex justify-contenet-between  gap-3'>
     <span className='numbers'>1</span>
      <td className='table_text'>Ukraine forces ‘recapture 20% of territory lost in Sievierodonetsk’ – as it happened</td>
      </div>
      
      <td className='table_text'><span className='numbers'>6</span>As war drags on, Ukrainians start to ask: could we have prepared better?</td>
     
      
    </tr>
    <tr>
        <div className='d-flex justify-contenet-between  gap-3'>
       < span className='numbers'>2</span>
    <td className='table_text'>‘Disgusting’ behaviour at Canadian police undercover training course sparks inquiry</td>
    </div>
      <td className='table_text'><span className='numbers'>7</span>Russian troops pound Donbas as Ukraine war enters 100th day</td>
     
    </tr>
    <tr>
        <div className="d-flex  justify-contenet-between  gap-3">
    <span className='numbers'>3</span>
    <td className='table_text'>What happened in the Russia-Ukraine war this week? Catch up with the must-read news and analysis</td></div>
      <td className='table_text'><span className='numbers'>8</span>Omicron subvariant drives spike in cases and deaths in Portugal</td>
      
    </tr>

    <tr>
    <div className="d-flex  justify-contenet-between  gap-3">
    <span className='numbers'>4</span>
<td className='table_text'>Russia says Tory MP’s son involved in killing Chechen commander in Ukraine</td></div>
<td className='table_text'><span className='numbers'>9</span>What does the Heard-Depp verdict mean for the #MeToo movement?</td>
    </tr>

    <tr>
    <div className="d-flex  justify-contenet-between  gap-3">
    <span className='numbers'> 5</span>
        <td className='table_text'>Russia-Ukraine war: what we know on day 100 of the invasion</td></div>
        <td className='table_text pd-5'><span className='numbers'>10</span>Estonia’s PM calls for new government talks as coalition collapses</td>
    </tr>
  </tbody>
</table>
                        </div>


                       
                                      

                                  

                                   

                       
                       


                        
                        <div className="col-md-2">
                        <p>.</p>
                            <p className='box3'>Advertisement</p>
                        </div>
                        </div>
                   
                </div>

                <div className='lines mb-3 bt-0 bb-0' >
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                           
                            </div>
                            <small>Topics</small>
<ul className='bottom_links'>
<li><a className='linktags'>All today's stories</a></li>
<li><a className='linktags'>Europe</a></li>
<li><a className='linktags'>Ukrain</a></li>
<li><a className='linktags'>Russia</a></li>
<li><a className='linktags'>Monarchy</a></li>
<li><a className='linktags'>Queen's platinium Jubilee</a></li>
</ul>
   <hr/>   

    <div>
                            <ul className='anchortags '>
                              <li> <a className='refs' href='/'>World</a></li> 
                               <li> <a className='refs' href='/'>UK</a></li>
                               <li> <a className='refs' href='/'>Coronavirus</a></li>
                               <li> <a className='refs' href='/'>Climate crisis</a></li>
                               <li><a className='refs' href='/'>Environtment</a></li> 
                               <li><a className='refs' href='/'>Science</a></li> 
                               <li> <a className='refs' href='/'>Global development</a></li> 
                                <li><a className='refs' href='/'>Footbal</a></li>
                                <li><a className='refs' href='/'>Tech</a></li>
                               <li><a className='refs' href='/'>Business</a></li> 





                            </ul>
                        </div>   

                                          
            </div>
           
        </div>
    );
}

export default InPictures;