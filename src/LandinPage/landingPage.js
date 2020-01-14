import React from 'react';
import './LandingPage.css'
import Slide from '../HomeSlide/Slide.js';

const tempBackground = {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: '40px',
    width: '100vw',
    height: '100vh',
  }

export default function LandingPage(props){
    return(
        // <div className="Main-Div">
            props.ScreenWidth <= 414 ?
            <div className="LandingMobile">
                <p>
                    {`${props.ScreenWidth}`}
                </p>
                <Slide ScreenWidth={props.ScreenWidth}/>
            </div> :
            <div style = {tempBackground} >
                <p>Hello You There</p>
            </div>
        // </div>
    )
}