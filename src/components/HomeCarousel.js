import React from 'react'
import '../css/HomeCarousel.css'

function HomeCarousel() {
    return (
        <div>
            <div id="carouselHome" className="carousel slide carousel-multi-item" data-ride="carousel">             
                <ol className="carousel-indicators">
                    <li data-target="#carouselHome" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselHome" data-slide-to="1"></li>
                    <li data-target="#carouselHome" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://intradecor.com/vender/wow/data0/images/modular-kitchen-new.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://intradecor.com/vender/wow/data0/images/modular-kitchen-new.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>      
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://intradecor.com/vender/wow/data0/images/modular-kitchen-new.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2">
                                    <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Product</h4>
                                        <p className="card-text">Check out our Products. You might just find out what you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default HomeCarousel
