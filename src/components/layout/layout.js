import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.css';

export default class layout extends Component {
  
  render() {
    return <div className="component-layout">
      {
        this.props.loginpage  ? this.props.children :
        <main>  
        <Header />
        {this.props.children}
        <Footer />
        </main>
      }  
    </div>;
  }
}