import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, Events } from 'react-scroll';
import $ from 'jquery';
import Scrollspy from 'react-scrollspy';

import './header.css'

export default class header extends Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
            let nav = $('.navbar-toggle');
            if(nav.hasClass('open')){
                nav.toggleClass('open');
                $('#navigation').slideToggle(400);
            }
        });
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
        
        $('.navigation-menu>li').slice(-2).addClass('last-elements');
        
        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }
        render() {
        return (
                <header id="topnav" className="defaultscroll sticky fixed-top">
                    <div className="container">
                    <div>
                        <LinkScroll className="logo" to="home" spy={true} smooth={true} duration={500}>Pro. Inf.</LinkScroll>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link to="#" className="navbar-toggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="navigation">
                        <Scrollspy className="navigation-menu " items={ ['home', 'features', 'services','pricing','client','faq','contact'] } currentClassName="active">
                                <li className="has-submenu">
                                    <LinkScroll className="a" to="home" spy={true} smooth={true} duration={500}>Home</LinkScroll>
                                </li>

                                <li className="has-submenu " >
                                    <LinkScroll className="a" to="features" spy={true} smooth={true} duration={500}>Features</LinkScroll>
                                </li>

                                <li className="has-submenu">
                                    <LinkScroll className="a" to="services" spy={true} smooth={true} duration={500}>Services</LinkScroll>
                                </li>

                                <li className="has-submenu">
                                    <LinkScroll className="a" to="pricing" spy={true} smooth={true} duration={500}>Pricing</LinkScroll>
                                </li>

                                <li className="has-submenu">
                                    <LinkScroll className="a" to="client" spy={true} smooth={true} duration={500}>Client</LinkScroll>
                                </li>

                                <li className="has-submenu">
                                    <LinkScroll className="a" to="faq" spy={true} smooth={true} duration={500}>FAQ</LinkScroll>
                                </li>

                                <li className="has-submenu">
                                    <LinkScroll className="a" to="contact" spy={true} smooth={true} duration={500}>Contact</LinkScroll>
                                </li>
                        </Scrollspy>
                    </div>
                </div>
            </header>
        );
    }
}