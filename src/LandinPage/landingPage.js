import React from 'react';
import './LandingPage.css'

const tempBackground = {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: '40px',
    width: '100vw',
    height: '100vh'
  }

export default function LandingPage(props){
    return(
        props.ScreenWidth <=414 ? 
        <div className="LandingMobile">
            <p>
            {`${props.ScreenWidth}`}
            </p>
        </div> :
        <div style = {tempBackground} >Hello You There</div>
    )
}