import React from 'react';
import Image2 from '../images/flags.png';
import Image1 from '../images/flag1.png';
import Image3 from '../images/flag2.png';
import Image4 from '../images/flag4.png';

export default function TakePart() {
    return (
        <div className="container border ">
            <div className="row">
                <div className="col-md-2">
                    <h3>Take Part</h3>
                </div>

                <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "2rem" }}>
                    <img src={Image2} style={{ width: '230px', marginLeft: "-2rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '140px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts text-danger'> Finland and Sweden/</span>
                            How do you feel about your countries and Nato membership?
                        </p>



                    </p>



                </div>

                <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "1.5rem" }}>
                    <img src={Image1} style={{ width: '230px', marginLeft: "-2rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '140px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts text-danger'> Russians/</span>
                            Tell us what the mood is like in your country
                        </p>



                    </p>



                </div>

                <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "1.5rem" }}>
                    <img src={Image3} style={{ width: '230px', marginLeft: "-2rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '140px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts text-danger'> Tell us/</span>
                            How have you been affected by the situation in Ukrain?
                        </p>



                    </p>



                </div>



                <div className='col-md-2 medium_cards mt-1' style={{ marginLeft: "1.5rem" }}>
                    <img src={Image4} style={{ width: '230px', marginLeft: "-2rem" }} alt="post" />
                    <p style={{ width: '230px', fontWeight: 'bold', height: '140px', fontSize: '1.25rem', lineHeight: '1.5rem', backgroundColor: 'rgb(226, 225, 225)', marginLeft: "-2rem" }}>
                        <p className='card-text text-container'>
                            <span className='span_texts text-danger'> Get in touch/</span>
                            share a story with the guardian
                        </p>



                    </p>
                </div>
            </div>
        </div>
    );
}

