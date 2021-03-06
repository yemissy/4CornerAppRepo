import React from 'react';
import './HamburgerIcon.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../Images/MobileMenu.png';
// import SideBar from '../SideBar/SideBarMenu.js';


const hamStyel1 = {
    position:  'relative',
    bottom: 0.7 + 'em',
    right: 0.6 + 'em',
    width: 3.4 + 'em',
    height: 3.6 + 'em',
}
const hamStyel2 = {
    position: 'relative',
    right: 0.7 + 'em',
    bottom: 0.8 + 'em',
    width: 4 + 'em',
    height: 4 + 'em',
}


//Write a function like the handleClick that returns the sidebarmenu once the icon is clicked

export default function HamburgerIcon(props){
    console.log(props.screenWidth)
    return(
        <div className="Menu-Div">
            <IconButton id="menuIconBtn" onClick={props.handleClick} 
            style= {props.screenWidth <= 350 ? hamStyel1: hamStyel2 }>
                <img id="menuIcon" src={MenuIcon} alt="MenuIcon" />
            </IconButton>

        </div>
    )
}
