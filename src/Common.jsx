import React from "react";

import { NavLink } from "react-router-dom";


const Common = (props) => {
    const { name, imgSrc, visit, btnName } = props;
    return (
        <>
            <section id='header' className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{ name } <strong className="brand-name">RoshanApp</strong></h1>
                                    <h2 className="my-3">
                                        We are the team of talented Web Developers
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} className="btn-get-started">{ btnName }</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={ imgSrc } className="img-fluid animated Img" alt="homeImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;