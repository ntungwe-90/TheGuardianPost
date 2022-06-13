import React from 'react';
import Image2 from '../images/map2.png';
import Image3 from '../images/map3.png';
import Image4 from '../images/map4.png';
import Image5 from '../images/dine.png';
import Image7 from '../images/love.png';
import Image8 from '../images/blackg.png';
import Image1 from '../images/map.png'


export default function Sportlight() {
    return (

        <div className='container border cards_row'>
            <div className='row '>
                <div className='col-md-2 '>
                    <h2>SportLights</h2>
                </div>
                <div className='col-md-2 sportlight_cards' >
                    <p style={{ width: '250px', fontWeight: 'bold', height: '320px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: ".0333rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts'>Love island returns/</span>
                            perfect escapism or mating zoo for Voyeurs

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
                            <img src={Image7} alt="post" height="320px" width="535px" style={{ marginLeft: "1rem" }} />
                        </div>
                    </div>


                </div>

                <div className='col-md-2' >
                    <img src={Image4} style={{ width: '230px', marginLeft: "-6rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '180px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-6rem" }}>
                        <p className='card-text text-container'>
                            <span className=' spantext'>DIY pedicure, sofa picnics- and mango in the bath/</span>
                            <p className=''>20 cheap lifestyle hacks to try this summer</p>

                        </p>






                    </p>



                </div>

            </div>
            <div className="row opinionContainer mt-1">
                <div className="col-md-2">
                    <p></p>
                </div>




                <div className="col-md-5 mt-0 " >
                    <div className="card-body d-flex  align-items-center sport_highlights gap-2" style={{ borderTop: '1px solid red' }} >
                        <img src={Image1} alt="..." className='mts pictures' />

                        <p className=" opinion_text mb-1 font-weight-bold text-danger"><span className='spots text-danger'>French Open/</span>Swiatek survives scare from Zheng to maintain run

                        </p>

                    </div>
                    <div className="card-body d-flex  align-items-center sport_highlights gap-2" style={{ borderTop: '1px solid red' }}>
                        <img src={Image2} alt="..." className='mts pictures' />

                        <p className=" opinion_text mb-1 font-weight-bold" style={{ color: "#7c1c64", }}><span className='spantext'> Jeff Gladney/</span>Arizona Cardinals cornerback dies in car crash at age of 25

                        </p>

                    </div>


                    <div className="card-body d-flex  align-items-center sport_highlights gap-2" >
                        <img src={Image3} alt="..." className='mts pictures' />

                        <p className=" opinion_text mb-1 font-weight-bold"><span className='spots'>Lashings of rain, chemical loos and lofty goals/</span>
                            Murray lifts off in surbiton
                        </p>

                    </div>


                    <div className="card-body d-flex  align-items-center culture_highlights gap-2 mb-0" >
                        <img src={Image4} alt="..." className='mts pictures' />

                        <p className=" opinion_text mb-1 font-weight-bold" style={{ color: '#6b5840' }}><span className='span_texts'>Football/</span> Boehly vows to bring success following Chelsea takeover

                        </p>

                    </div>







                </div>
                <div className='col-md-2' >
                    <img src={Image8} style={{ width: '228px', marginLeft: "-.5rem" }} alt="post" />
                    <p style={{ width: '228px', fontWeight: 'bold', height: 313, fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(250, 248, 248)', marginLeft: "-.5rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts'> Wunmi Mosak/</span>
                            'I'M Black in America. My feeling about the police is...
                            I'M scared'
                        </p>
                        <span className='blachgirl'>
                            The  actor has gone from machester charity shop rifler to Hollywood's most wanted,
                            As she stars in the hot new show from the wire team, she opens up about sweet-talking racist cops.. and why David Simon marginLeft
                            her a 'bumbling fool'

                        </span>
                        <small style={{ marginLeft: '10rem', marginTop: "25px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="lightgrey" className="bi bi-chat-left-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        </svg><small style={{ color: 'grey' }}>9</small></small>

                    </p>



                </div>

                <div className='col-md-2' >
                    <img src={Image5} style={{ width: '228px', marginLeft: "1rem" }} alt="post" />
                    <p style={{ width: '228px', fontWeight: 'bold', height: 313, fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(250, 248, 248)', marginLeft: "1rem" }}>
                        <p className='card-text text-container text-danger'>
                            <span className='span_texts text-danger'> 'A Certain stigma'/</span>
                            Spain's hospitality sector hit by waiter shortage
                        </p>
                        <p className='small smaller3'>
                            The  debut puzzle from spiral circus delves
                            into the mysteries and fears that lurk in the deep


                        </p>

                    </p>



                </div>




            </div>


        </div>






    );
}
