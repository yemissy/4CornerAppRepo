import React from 'react';
import './LandingPage.css'
import Slide from '../HomeSlide/Slide.js';
import MenuBar from '../MenuBar/Menu.js'


const tempBackground = {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: '40px',
    width: '100vw',
    height: '100vh',
  }

export default function LandingPage(props){
    let MenuOpened = false

    const handleMenuClick = () => {
        console.log("I am clicking menu btn")
        console.log(MenuOpened)
        MenuOpened === false ? MenuOpened = true : MenuOpened = false
        console.log(MenuOpened)
    }
    return(
        props.ScreenWidth <= 414 ?
        <div className="LandingMobile">
            <MenuBar handleClick={handleMenuClick} btnClicked={MenuOpened}/>
            <Slide ScreenWidth={props.ScreenWidth}/>
        </div> :
        <div style = {tempBackground} >
            <p>Hello You There</p>
        </div>
    )
}