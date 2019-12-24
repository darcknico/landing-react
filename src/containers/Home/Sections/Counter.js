import React , {Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component{
    
    render(){
        return(
            <div>
             <section className="section bg-custom">
                <div className="container">
                    <div className="row justify-content-center" id="counter">
                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-timer"></i>
                            </div>
                            <h1 className="counter-value">
                                <CountUp end={1200} />
                            </h1>
                            <h5 className="counter-name">Working Hours</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-briefcase"></i>
                            </div>
                            <h1 className="counter-value" >
                                <CountUp
                                start={10}
                                end={4900}/>
                            </h1>
                            <h5 className="counter-name">Completed Projects</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <h1 className="counter-value">
                                <CountUp
                                start={600}
                                end={5645}/>
                            </h1>
                            <h5 className="counter-name">No. of Clients</h5>
                        </div>
                        <div className="col-md-3 text-white text-center pt-3 pb-3"> 
                            <div className="counter-icon">
                                <i className="mdi mdi-account-multiple"></i>
                            </div>                       
                            <h1 className="counter-value">
                                <CountUp
                                start={10}
                                end={800}/>
                            </h1>
                            <h5 className="counter-name">team Member</h5>
                        </div>
                    </div>
                </div>
           </section>
           </div>
        );
    }
}

export default Counter;   