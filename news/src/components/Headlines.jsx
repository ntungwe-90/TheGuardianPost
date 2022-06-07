import React, { Component } from 'react';
import Image1 from '../images/firewood.png';
import Image2 from '../images/head.png';
import Image3 from '../images/house.png';
import Image4 from '../images/funeral.png';
import Image5 from '../images/air.png';
import Image6 from '../images/pray.png';
import Image7 from '../images/grass.png';
import Image8 from '../images/img1.png';
import Image9 from '../images/wman.png';
import Image10 from '../images/fire.png';
import Image11 from '../images/swim.png';

import Sportlight from './Sportlight';



class NewsArticles extends Component {
    render() {
        return (

            // FIRST LINK SECTION OF NEWS ARTICLES
            <div>
                <section>

                    <div className='container border'>
                        <div>
                            <ul className='anchortags mt-3'>
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



                        {/*  LINES */}
                        <div className='lines mb-5 bt-0 bb-0' >
                            <hr className='lines'></hr> <hr className='lines'></hr> < hr className='lines'></hr>
                        </div>



                        {/* ALL ATICLES IN FIRST SECTION */}

                        <div className='row'>
                            <div className='col-md-2 border'>


                                <p style={{ fontWeight: '700', fontSize: '23px', fontFamily: 'Guardian Egyptian Web",Georgia,serif', color: "#121212" }}>Ukrain Invasion</p>
                                <div>
                                    <p style={{ fontWeight: 'bolder', fontSize: '1rem', fontFamily: '"Guardian Egyptian Web",Georgia,serif', color: '#8B0000' }}>Saturday<br />
                                        14 May 2022</p>
                                </div>

                            </div>

                            <div className='col-md-7 border mb-0'>
                                <p className='russia mt-2'> <span style={{ color: '#8B0000', fontWeight: '700', fontSize: '2rem' }}>Live/</span> Russian ukrain war :Ukranian general<br />
                                    predicts end of war; UK  Warns Russia likely to rig<br />
                                    Referandum in Donbas</p>
                                <br />
                                <br />


                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item ">
                                            <img src={Image9} class="d-block w-100 " alt="sel" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Image2} class="d-block w-100 h-100vh" alt="sel" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Image3} class="d-block w-100" alt="cel" />
                                        </div>
                                    </div>
                                </div>




                            </div>

                            <div className='col-md-3 border' >
                                <div className='' >
                                    <div className='mycard' style={{ height: "18rem", backgroundColor: "rgb(226, 225, 225)", width: "15.25rem" }}>
                                        <img src={Image1} style={{ width: '100%' }} alt="post" />
                                        <p style={{ marginTop: "5px", width: '80%', fontWeight: '500', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1rem' }}>FULL-REPORT/</span> Ukraine <br />
                                            has won the battle of Kharkiv,
                                            ‘long phase of war’</p>

                                    </div>


                                    <div className=''>

                                        <p style={{ borderTop: '0.1rem solid #8B0000', height: '9rem', marginTop: "5px", width: '80%', fontWeight: '500', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1rem' }}>FULL-REPORT/</span> Ukraine <br />
                                            has won the battle of Kharkiv,
                                            ‘long phase of war’



                                        </p>
                                    </div>

                                    <div className=''>

                                        <p style={{ borderTop: '0.1rem solid #8B0000', height: '9rem', width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1rem' }}>FULL-REPORT/</span> Ukraine <br />
                                            has won the battle of Kharkiv,
                                            ‘long phase of war’



                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECOND SECTION TO NEWS ARTICLES */}

                <section className='container border'>

                    <div className='row d-flex gap-2'>
                        <div className='col-md-2 '>
                            <p style={{ fontWeight: '700', fontSize: '23px', fontFamily: 'Guardian Egyptian Web",Georgia,serif', color: "#121212" }}>Ukrain Invasion<br />in focus</p>


                        </div>

                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2rem" }}>
                            <img src={Image10} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '150px', fontSize: '1.25rem', backgroundColor: 'rgb(226, 225, 225)', lineHeight: '1.5rem', marginLeft: "-2rem" }}>
                                <p style={{ width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.5rem' }}>FULL-REPORT/</span> Ukraine <br />
                                    has won the battle of Kharkiv,
                                    ‘long phase of war’



                                </p>



                            </p>




                        </div>

                        <div className='col-md-2 medium_cards mt-1 ' style={{ marginLeft: "1.5rem" }}>
                            <img src={Image6} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '150px', fontSize: '1.25rem', backgroundColor: 'rgb(226, 225, 225)', lineHeight: '1.5rem', marginLeft: "-2rem" }}>
                                <p style={{ width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.5rem' }}>FULL-REPORT/</span> Ukraine <br />
                                    has won the battle of Kharkiv,
                                    ‘long phase of war’



                                </p>



                            </p>






                        </div>

                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "1.5rem" }}>
                            <img src={Image5} style={{ width: '240px', marginLeft: "-2rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '150px', fontSize: '1.25rem', backgroundColor: 'rgb(226, 225, 225)', lineHeight: '1.5rem', marginLeft: "-2rem" }}>
                                <p style={{ width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.5rem' }}>FULL-REPORT/</span> Ukraine <br />
                                    has won the battle of Kharkiv,
                                    ‘long phase of war’



                                </p>



                            </p>






                        </div>



                        <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "1.5rem" }}>
                            <img src={Image4} style={{ width: '240px', marginLeft: "-1.5rem" }} alt="post" />
                            <p style={{ width: '240px', fontWeight: 'bold', height: '150px', fontSize: '1.25rem', backgroundColor: 'rgb(226, 225, 225)', lineHeight: '1.5rem', marginLeft: "-1.5rem" }}>
                                <p style={{ width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.5rem' }}>FULL-REPORT/</span> Ukraine <br />
                                    has won the battle of Kharkiv,
                                    ‘long phase of war’



                                </p>



                            </p>



                        </div>












                    </div>

                </section>


                {/* THIRD SECTION OF NEWS ARTICLES  */}
                <section>
                    <div className='container border cards_row'>
                        <div className='row '>
                            <div className='col-md-2'>
                                <h2>HeadLines</h2>
                            </div>
                            <div className='col-md-2 '>
                                <div className='mt-0' style={{ display: "block", alignItems: 'flex-end' }}>
                                    <div className='all_cardtexts'> <span className='spanart'>EXCLUSIVE/</span><br />
                                        Environmental
                                        toxins are
                                        worsening obersity
                                        pandemic, say
                                        scientist

                                    </div>
                                </div>
                                <small className='subarticle' style={{ lineHeight: "-2rem" }}>
                                    Pollutants can upset bodys,
                                    methabolic thermosstat with
                                    some,
                                    even causing obersity to
                                    be  passed unto children</small>


                            </div>



                            <div className='col-md-6 mb-3'>
                                <div className=''>
                                    <div className=''>
                                        <img src={Image7} alt="post" height="300px" width="535px" />
                                    </div>
                                </div>


                            </div>

                            <div className='col-md-2 medium_cards ' style={{ marginLeft: "-5.5rem" }}>
                                <img src={Image8} style={{ width: '241px', marginLeft: "-1.5rem" }} alt="post" />
                                <p style={{ width: '240px', fontWeight: 'bold', height: '170px', fontSize: '1.25rem', backgroundColor: 'rgb(226, 225, 225)', lineHeight: '1.5rem', marginLeft: "-1.5rem" }}>
                                    <p style={{ width: '80%', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.5rem' }}>FULL-REPORT/</span> Ukraine <br />
                                        has won the battle of Kharkiv,
                                        ‘long phase of war’



                                    </p>



                                </p>



                            </div>





                            {/* FOURTH SECTION OF THE NEWS ARTICLES */}
                            <div className='row gap-3 '>
                                <div className='col-md-2 mb-5'>
                                    <p className='mtop'>All World News Stories</p>
                                    <p className='mtop'>Twiterr</p>
                                </div>
                                <div className="col-md-2 " style={{ marginLeft: "-10px" }}>
                                    <div className='' style={{ display: "block", alignItems: 'flex-end', justifyContent: 'left', marginTop: "1px solid red" }}>
                                        <img src={Image11} style={{ width: '118%' }} alt="post" />
                                        <p style={{ width: '118%', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.25rem' }}>FULL-REPORT/</span> Ukraine <br />
                                            has won the battle of Kharkiv,
                                            analysts say, as Kyiv warns of
                                            ‘long phase of war’
                                            <br />
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-2 ms-2 ">
                                    <div className='' style={{ display: "block", alignItems: 'flex-end', justifyContent: 'left' }}>
                                        <img src={Image3} style={{ width: '118%' }} alt="post" />
                                        <p style={{ width: '118%', fontWeight: 'bold', fontSize: '1.5rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)' }}> <span style={{ color: '#8B0000', fontWeight: 'bold', fontSize: '1.25rem' }}>FULL-REPORT/</span> Ukraine <br />
                                            has won the battle of Kharkiv,
                                            analysts say, as Kyiv warns of
                                            ‘long phase of war’
                                            <br />
                                            <br />
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-2 mt-1 me-4" style={{ marginLeft: '1rem' }}>
                                    <div className='text_box '>
                                        <p><span className='text-danger1'>FULL/REPORT</span>
                                            Ukrain  has won the battle of Kharkiv,
                                            analysts say, as Kyiv warns of
                                            ‘long phase of war’’
                                        </p>
                                    </div>

                                    <div className='text_box  mt-1'>
                                        <p><span className='text-danger1'>Tanzilan/ Khan</span>
                                            Disability rights campaigner tells young women ‘the world is yours’
                                        </p>
                                    </div>
                                    <div className='text_box mt-1'>
                                        <p><span className='text-danger1'>Tanzilan/ Khan</span>
                                            Disability rights campaigner tells young women ‘the world is yours’
                                        </p>
                                    </div>

                                </div>


                                <div className="col-md-2 mt-1 me-4" style={{ marginLeft: '1rem' }}>
                                    <div className='text_box '>
                                        <p><span className='text-danger1'>FULL/REPORT</span>
                                            Ukrain  has won the battle of Kharkiv,
                                            analysts say, as Kyiv warns of
                                            ‘long phase of war’’
                                        </p>
                                    </div>

                                    <div className='text_box  mt-1'>
                                        <p><span className='text-danger1'>Tanzilan/ Khan</span>
                                            Disability rights campaigner tells young women ‘the world is yours’
                                        </p>
                                    </div>
                                    <div className='text_box mt-1'>
                                        <p><span className='text-danger1'>Tanzilan/ Khan</span>
                                            Disability rights campaigner tells young women ‘the world is yours’
                                        </p>
                                    </div>

                                </div>







                            </div>


                        </div>


                    </div>



                </section>

                <Sportlight />

            </div>

        );
    }
}

export default NewsArticles;