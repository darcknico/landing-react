import React , {Component } from 'react';
import {SvgIcon} from '@material-ui/core';
import {CubeOutline, Headset, Monitor,CloudOutline,CellphoneAndroid,Eyedropper} from 'mdi-material-ui';
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component{
    
    render(){
        return(
                <section className="section" id="services">
                    <div className="container">
                        <ScrollAnimation  animateIn='fadeInDown' animateOnce={true}>
                            <div className="row justify-content-center pt-5">
                                <div className="col-md-8">
                                    <div className="text-center">
                                        <h3 className="section-title pt-5">Our Services</h3>
                                        <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><CubeOutline/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Digital Design</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><Headset/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Unlimited Colors</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><Monitor/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Strategy Solutions</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><CloudOutline/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Awesome Support</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><CellphoneAndroid/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Truly Multipurpose</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-4">
                                <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <SvgIcon className="i text-custom" ><Eyedropper/></SvgIcon>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Easy to customize</h5>
                                            <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Services;   