import React from 'react';

export default function Footer() {
    return (
        <div className="footer_body" style={{ backgroundColor: "#052962", color: "#ffff" }}>
            <div className="footer_nav ms-5">
                <li><a>News</a></li>
                <li><a>Opinion</a></li>
                <li><a>Sports</a></li>
                <li><a>Culture</a></li>
                <li><a>Lifestyle</a></li>

            </div>



            <table className="table table-bordered" style={{ color: "white" }}>
                <thead>
                    <tr>


                        <tr className='ftext'><p>All the day's headlines and highlights from the Guardian, direct to you every morning</p>
                            <a className='btn btn-info binfo' >Sign up for the Guardian Headlines email</a></tr>
                        <th scope="col" className='footer_items'>
                            <tr>
                                <ul>
                                    <li><a>Contact Us</a></li>
                                    <li><a>
                                        Complaints &amp; corrections
                                    </a></li>
                                    <li><a>SecureDrop</a></li>
                                    <li><a>Work for us</a></li>
                                    <li><a>privacy Policy</a></li>
                                    <li><a>cookie policy</a></li>
                                    <li><a>Terms and conditions</a></li>
                                    <li><a>help</a></li>
                                </ul>
                            </tr>


                        </th>
                        <th scope="col" className='footer_items'>
                            <ul>
                                <li><a>Contact Us</a></li>
                                <li><a>
                                    Complaints &amp; corrections
                                </a></li>
                                <li><a>SecureDrop</a></li>
                                <li><a>Work for us</a></li>
                                <li><a>privacy Policy</a></li>
                                <li><a>cookie policy</a></li>
                                <li><a>Terms and conditions</a></li>
                                <li><a>help</a></li>
                                <li><a>help</a></li>
                            </ul>
                        </th>
                        <th scope="col" className='footer_items'>
                            <ul>
                                <li><a>Advertise with Us</a></li>
                                <li><a>Search UKJobs</a></li>
                            </ul>
                        </th>
                        <tr scope="col">
                            <div className=''>
                                <span>
                                    <h1 style={{ fontSize: "2rem" }}>support the Guardian</h1>
                                    <span className='sun-title'>Available for everyone, funded by readers</span><br />
                                    <div className='btn-group'>
                                        <button className='butt'> Contribute-</button>
                                        <button className='butt'> Subscribe-</button>

                                        <div className="text-muted py-5">
                                            <div className="container">
                                                <p className="float-end mb-1">
                                                    <a className='scroll_up' href="/">Back to top</a>

                                                </p>


                                                {/* <a href="/docs/5.2/getting-started/introduction/"></a> */}
                                            </div>
                                        </div>
                                    </div>

                                </span></div>

                        </tr>


                    </tr>

                </thead>

                <tbody>
                    <div className="really-serious-copyright">

                        © 2022 Guardian News &amp; Media Limited or its affiliated companies. All rights reserved.

                    </div>



                </tbody>
            </table>

        </div>

    )
}




