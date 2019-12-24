import React , {Component } from 'react';
import {SvgIcon} from '@material-ui/core';
import {Cellphone, MapMarker, EmailOutline} from 'mdi-material-ui';

class Contact extends Component{
    render(){
        return(
            <section className="pt-5" id="contact">
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-8">
                            <div className="text-center">
                                <h3 className="section-title text-white pt-5">Contact us</h3>
                                <p className="section-subtitle pt-3 text-whte">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="single-contact text-center text-white"> 
                                        <SvgIcon className="i"><Cellphone/></SvgIcon>
                                        <h4>Phone</h4>
                                        <p>000-111-222 333</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-contact text-center text-white"> 
                                        <SvgIcon className="i"><MapMarker/></SvgIcon>
                                        <h4>Address</h4>
                                        <p>555, Fake Street</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-contact text-center text-white"> 
                                        <SvgIcon className="i"><EmailOutline/></SvgIcon>
                                        <h4>Email</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;   