import React , {Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import preview from '../../../assets/images/preview-5.png';

class Client extends Component{
    state = {
        showItems: 3
    }
    
    handleWindowResize = () => {
        if (window) {
            let showItems = 3
            let naturalSlideHeight = 100
        if (window.innerWidth < 760) {
            showItems = 1
            naturalSlideHeight = 100
        } else if (window.innerWidth < 800) {
            showItems = 2
        } else if (window.innerWidth < 1050) {
            showItems = 3
        } else if (window.innerWidth < 1440) {
            showItems = 3
        } else if (window.innerWidth < 1980) {
            showItems = 3
        }
            this.setState({
                showItems: showItems,
                naturalSlideHeight: naturalSlideHeight
            })
        }
    }
    
    componentDidMount() {
        if (window) {
            window.addEventListener('resize', this.handleWindowResize.bind(this))
            this.handleWindowResize()
        }
    }
    
    componentWillUnmount() {
        if (window) {
            window.removeEventListener('resize', this.handleWindowResize.bind(this))
        }
    }
    render(){
        const { showItems, naturalSlideHeight } = this.state

        return(
            <section className="section bg-gray" id="client">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="text-center">
                                <div className="title-icon">
                                    <i className="mdi mdi-account-circle"></i>
                                </div>
                                <h3 className="section-title pt-5">Our Client</h3>
                                <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={naturalSlideHeight}
                        totalSlides={5}
                        visibleSlides={showItems }
                        isPlaying={true}
                        interval={2500}
                    >
                        <Slider>
                            <Slide index={0}>
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src={preview} alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src={preview} alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src={preview} alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src={preview} alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={4}>
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src={preview} alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </section>
        );
    }
}

export default Client;   