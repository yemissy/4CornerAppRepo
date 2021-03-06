import React, { useState } from 'react';
import './LandingPage.css'
import Slide from '../HomeSlide/Slide.js';
import HamburgerIcon from '../Hamburger/HamburgerIcon.js'
import SideBarMenu from '../SideBar/SideBarMenu.js';
import MobileFooter from '../Footer/MobileFooter.js';
import { Label } from 'semantic-ui-react';



export default function LandingPage(props){

    const tempBackground = {
        backgroundColor: 'pink',
        color: 'white',
        fontSize: '40px',
        width: '100vw',
        height: '100vh',
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

    const linkLabels = [
        {
            color: 'brown',
            title: 'P',
            name: 'PholoLink'
         },
        {
            color: 'yellow',
            title: 'V',
            name: 'VideoLink'
         },
        {
            color: 'teal',
            title: 'F',
            name: 'FilmLink'
         },
        {
            color: 'black',
            title: 'A U',
            name: 'AboutUsLink'
         }
    ]
      


    return(
        props.ScreenWidth <= 414 ?
        <div className="LandingMobile">
            <HamburgerIcon handleClick={handleIconClick} screenWidth={props.ScreenWidth}/>
            {SideBar.HamburgerClicked === true?
            <SideBarMenu sideBarOpened={SideBar.sideBarOpened} closeBar={closeSideBar}/>
             :null}
            <Slide ScreenWidth={props.ScreenWidth} />
            <MobileFooter />
            
        </div> :
        <div style = {tempBackground} >
            <p>Hello You There</p>
        </div>
    )
}