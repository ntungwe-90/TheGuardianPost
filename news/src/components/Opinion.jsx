import React from 'react';
import Image1 from '../images/baggirl.png';
import Image2 from '../images/cheers.png';
import Image3 from '../images/signing.png';
import Image4 from '../images/1.png';
import Image5 from '../images/2.png';
import Image6 from '../images/3.png';
function Opinion() {
    return (
        <div className="container border mt-3">
            <div className="row">
                <div className='col-md-2 '>
                    <h2>OPINION</h2>
                </div>

                <div className="col-md-4">
                    <div className="">
                        <img src={Image1} className="pics" alt="girl" />

                        <div className="card-text text-container pics">
                            <p>Who's to blamed for the Us baby Milk
                                crisis?Not mothers who can't be
                                crisis?Not mothers who can't be
                                bothered to breastfeed
                                <h5 className='text-danger font-weight-bold'>Arwa Mahdawi</h5>
                                <div className='lines mb-5 bt-0 bb-0' >
                                    <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                                </div>



                                <br />

                            </p>
                        </div>
                    </div>

                    <div>

                    </div>


                </div>


                <div className='col-md-2 ' style={{ marginLeft: "8rem" }}>
                    <img src={Image2} style={{ width: '250px', marginLeft: "-4rem" }} alt="post" />
                    <p style={{ width: '250px', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-4rem" }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.25rem' }}>Managing anxiety/</span> I <br />
                        <p className='card-text text-container'>
                            went wild swimming
                            in a chilly river and

                            attack
                        </p>
                        <p className='small'>  went wild swimming
                            in a chilly river and
                            hav't had a pandemic
                            in a chilly river and
                            hav't had a pandemic
                            in a chilly river and

                        </p>

                        <div className='lines mb-5 bt-0 bb-0' >
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                        </div>

                    </p>



                </div>

                <div className="div col-md-2">

                    <div className='col-md-2' >
                        <img src={Image3} style={{ width: '250px', marginLeft: "-1rem" }} alt="post" />
                        <p style={{ width: '250px', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-1rem" }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.25rem' }}>Managing anxiety/</span> I <br />
                            <p className='card-text text-container'>
                                went wild swimming
                                in a chilly river and

                                attack
                            </p>
                            <p className='small'> went wild swimming
                                in a chilly river and
                                hav't had a pandemic
                                in a chilly river and
                                hav't had a pandemic
                                attack since</p>


                            <div className='lines mb-5 bt-0 bb-0' >
                                <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                            </div>


                        </p>



                    </div>



                    <div>

                    </div>

                </div>
                <div className="row opinionContainer">
                    <div className="col-md-2">
                        <p></p>
                    </div>


                    <div className="col-md-5 mt-3 " >
                        <div class="card-body d-flex  align-items-center  margin_type gap-3 " >

                            <img src={Image4} height="100px" width="300px" alt="..." className='mts ' />

                            <p class=" mt0  opinion_text">Struggling to pay at the Suppermarket untill i felt that childhood shame flooding back.
                                <h4 className='text-title text-danger font-weight-bold'>Kerry Hudson</h4>

                            </p>

                        </div>
                        <div className='lines mb-5 bt-0 bb-0' >
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>


                            <div class="card-body d-flex  align-items-center mt-3 margin_type gap-2" >
                                <img src={Image5} height="100px" width="300px" alt="..." className='mts' />

                                <p class="card-text opinion_text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                    <h4 className='text-title text-danger'>Kerry Hudson</h4>
                                </p>

                            </div>
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>

                            <div class="card-body d-flex  align-items-center mt-3 margin_type gap-2 " >
                                <img src={Image6} height="100px" width="300px" alt="..." className='mts' />

                                <p class="card-text opinion_text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                    <h4 className='text-title text-danger'>Kerry Hudson</h4>
                                </p>

                            </div>
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                        </div>





                    </div>

                    <div className="col-md-2">
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

export default Opinion;