import React from 'react';
import Image1 from '../images/usa.png';
import Image2 from '../images/forest.png';
import Image3 from '../images/signing.png';
import Image4 from '../images/couples.png';
import Image5 from '../images/w1.png';
import Image6 from '../images/w2.png';
import Image7 from '../images/w3.png';

function Culture() {
    return (
        <div className="container border mt-3">
            <div className="row">
                <div className='col-md-2 '>
                    <p>CULTURE</p>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={Image1} className="pics" alt="girl" />

                        <div className=" text-height ">
                            <p className='text'> <a href=""><span>"The Queen is gone round the bend"/</span>  HM in pop, from Slowthai to the Smiths      to Blur</a>


                                <small style={{ marginLeft: '20rem', marginTop: "-5px" }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="grey" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                </svg>199</small>


                            </p>
                        </div>
                    </div>

                    <div>

                    </div>


                </div>


                <div className='col-md-2' style={{ marginLeft: "8rem" }}>
                    <img src={Image2} style={{ width: '250px', marginLeft: "-4rem" }} alt="post" />
                    <p style={{ width: '250px', fontWeight: 'bold', height: '282px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-4rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts'> Games/</span>
                            Silt review - a
                            lynchian underwater nightmare
                        </p>
                        <p className='small smaller'>
                            The  debut puzzle from spiral circus delves
                            into the mysteries and fears that lurk in the deep


                        </p>
                        <small style={{ marginLeft: '10rem', marginTop: "25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="grey" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        </svg>10</small>

                    </p>



                </div>



                <div className='col-md-2' >
                    <img src={Image4} style={{ width: '250px', marginLeft: "-1rem" }} alt="post" />
                    <p style={{ width: '250px', fontWeight: 'bold', height: '282px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-1rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts'>Ron Galella obituary/</span>
                            paparazzi photographer most
                            famous for Jacqueline Kennedy Onassis snaps

                        </p>
                        <p className='small smaller mt-3'>
                            paparazzi photographer whose
                            fame was build on his contentious relationship
                            with Jacquline Kennedy Onassis
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

                            <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts'>The reader interview/</span>Post your
                                question for fleetwood mac's Christine Mcvie

                            </p>

                        </div>
                        <div class="card-body d-flex  align-items-center culture_highlights gap-2" >
                            <img src={Image6} alt="..." className='mts pictures' />

                            <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts'> I could not stop/</span>
                                L Morgan Lee on making Broadway history

                            </p>

                        </div>


                        <div class="card-body d-flex  align-items-center culture_highlights gap-2" >
                            <img src={Image7} alt="..." className='mts pictures' />
                            <div className='all_text'>
                                <p class=" opinion_text mb-1 font-weight-bold"><span className='span_texts'>The reader interview/</span>
                                    post your questions for Glenda Jackson
                                </p>
                            </div>
                        </div>




                        <button className='btn btn-dark btn_black '> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>More Culture

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

export default Culture;