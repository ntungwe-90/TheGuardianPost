import React from 'react';
import Image1 from '../images/food.png';
import Image2 from '../images/oldw.png';
import Image4 from '../images/food2.png';
import Image5 from '../images/girls.png';
import Image6 from '../images/food3.png';
import Image7 from '../images/bb.png';

function LifeStyle() {
    return (
        <div className="container border mt-3">
            <div className="row">
                <div className='col-md-2 '>
                    <h3>LifeStyle</h3>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={Image1} className="pics" alt="girl" />

                        <div className=" text-height ">
                            <p className=' '> <a href=""><span className='text3 span-texts3'>Felicity Cloake's masterclass/</span>How to make baklava</a>


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
                            <span className='texts span_texts text-danger font-weight-bold'> Corgis, sex pistols and the royal bedtime tipple/</span>
                            Take the platinum jubilee quiz
                        </p>
                        <p className='small smaller smallest'>
                            You've probably had a lifetime's exposure to royal trivia - but how much can you remember?


                        </p>


                    </p>



                </div>



                <div className='col-md-2' >
                    <img src={Image4} style={{ width: '250px', marginLeft: "-1rem" }} alt="post" />
                    <p style={{ width: '250px', fontWeight: 'bold', height: '282px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-1rem" }}>
                        <p className='card-text text-container'>
                            <span className='text3 span-texts3'>Kitchen aide/</span>
                            The secret to no-cook cooking

                        </p>
                        <p className='small smaller smalles'>
                            Ever wondered what to make for dinner when it's too hot to stand infront of the hob?
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
                        <div class="card-body d-flex  align-items-center  lifestyle_highlights gap-2"  >
                            <img src={Image5} alt="..." className='mts pictures' />

                            <p class="  mb-1 font-weight-bold"><span className='text3 span_texts3'>Meet the Heartstopper generation/</span>'Young, gay
                                people being out and happy? It's revolutionary!''

                            </p>

                        </div>
                        <div class="card-body d-flex  align-items-center lifestyle_highlights gap-2" >
                            <img src={Image6} alt="..." className='mts pictures' />

                            <p class="  mb-1 font-weight-bold"><span className='text3 span_texts3'>Food/</span>
                                Nigel Slater's recipe for grilled chicken and curry sauce

                            </p>

                        </div>


                        <div class="card-body d-flex  align-items-center lifestyle_highlights gap-2" >
                            <img src={Image7} alt="..." className='mts pictures' />
                            <div className='all_text'>
                                <p class="mb-1 font-weight-bold"><span className=' text3 span_texts3'>Sexual healing/</span>
                                    I am facinated by BDSM don't enjoy sex-could i be asexual?
                                </p>
                            </div>
                        </div>




                        <button className='btn btn-dark btn_black '> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>More LifeStyle

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

export default LifeStyle;