import React from 'react';
import './Menu.css'
import {Menu }from 'semantic-ui-react';
// import MenuItem from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import MenuIcon from '../Images/MobileMenu.png';



export default function MenuBar(props){
    return(
        <div className="Menu-Div">
            <Button id="menuIconBtn" onClick={props.handleClick}>
                <img src={MenuIcon} alt="MenuIcon" />
            </Button>
            <Menu id="Semantic-menu" >
                <Menu.Item>Films</Menu.Item>
                <Menu.Item>Photos</Menu.Item>
                <Menu.Item>Prints</Menu.Item>
                <Menu.Item>About Us</Menu.Item>
            </Menu>
        </div>
    )
}
