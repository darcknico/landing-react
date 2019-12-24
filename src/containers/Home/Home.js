import React , {Component } from 'react';
import Services from './Sections/Services';
import Features from './Sections/Features';
import Counter from './Sections/Counter';
import Pricing from './Sections/Pricing';
import Client from './Sections/Client';
import Faq from './Sections/Faq';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import logo from './../../assets/images/macbook_1.png';

export default class Home extends Component{
    
    componentDidMount() {
        
    }

    render(){
        var mystyle = { position : "absolute"   };
        return(
            <div>
                <section className="home-bg-color" id="home">
                    <Particles style={mystyle}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 15
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }} />
                 
                    <div className="container slidero">
                        <div className="row justify-content-center" >
                            <div className="col-md-10 text-center text-white" >
                                <h1 className="mt-5 pt-5 home-title">
                                    <Typewriter
                                        options={{
                                            strings: ['We help startups launch their awesome website', 'We are Creative','We are Modern'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        />
                                </h1>
                                <p className="home-subtitle mx-auto pt-2">It is a long established fact that a reader will be of a page when looking at its layout.</p>
                                <div className=""> 
                                    <img src={logo} alt="" className="img-fluid center-block home-dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Features />
            <Counter />
            <Services />
            <Pricing />
            <Client />
            <Faq />
        </div>
        );
    }
}

