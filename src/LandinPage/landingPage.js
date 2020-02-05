import React, { useState } from 'react';
import './LandingPage.css'
import Slide from '../HomeSlide/Slide.js';
import HamburgerIcon from '../Hamburger/HamburgerIcon.js'
import SideBarMenu from '../SideBar/SideBarMenu.js';
import Footer from '../Footer/Footer';



export default function LandingPage(props){

    const tempBackground = {
        backgroundColor: 'pink',
        color: 'white',
        fontSize: '40px',
        width: '100vw',
        height: '100vh',
      }
    const slideStyle = {
        width: props.ScreenWidth,
    }
    const [SideBar, setMenu] = useState({HamburgerClicked: false, sideBarOpened: false})
    console.log(SideBar.HamburgerClicked, SideBar.sideBarOpened)

    const handleIconClick = () => {
        console.log("I am clicking menu btn")
        setMenu({HamburgerClicked: true, sideBarOpened: true})
    }
    const closeSideBar = (e) => {
        console.log('im clicking the x button')
        setMenu({HamburgerClicked: false, sideBarOpened: false})
    }
    return(
        props.ScreenWidth <= 414 ?
        <div className="LandingMobile">
            <HamburgerIcon handleClick={handleIconClick} screenWidth={props.ScreenWidth}/>
            {SideBar.HamburgerClicked === true?
            <SideBarMenu sideBarOpened={SideBar.sideBarOpened} closeBar={closeSideBar}/>
             :null}
            <Slide ScreenWidth={props.ScreenWidth} />
            <Footer />
        </div> :
        <div style = {tempBackground} >
            <p>Hello You There</p>
        </div>
    )
}