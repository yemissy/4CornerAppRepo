import React from 'react';
import './HamburgerIcon.css'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../Images/MobileMenu.png';
// import SideBar from '../SideBar/SideBarMenu.js';


const hamStyel1 = {
    position:  'absolute',
    top: 0.1 + 'em',
    left: 10.3 + 'em',
    width: 3.4 + 'em',
    height: 3.6 + 'em',
    // top: 1.1 + 'em'
}
const hamStyel2 = {
    position: 'absolute',
    left: 12 + 'em',
    top: 0.1 + 'em',
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
