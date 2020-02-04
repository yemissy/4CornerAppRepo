import React from 'react';
import './SidebarMenu.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '../Images/ClearIcon.svg';
import {Menu} from 'semantic-ui-react';




export default function SideBarMenu(props){
    return(
        <div>
            <Menu id='sideBar'>
                <Menu.Item>Photos</Menu.Item>
                <Menu.Item>Videos</Menu.Item>
                <Menu.Item>Films</Menu.Item>
                <Menu.Item>About us</Menu.Item>
            </Menu>
            <IconButton id='clearIconBtn' size="medium" onClick={props.closeBar}>
                <img src={ClearIcon} alt='Clear Icon' id="clearIcon"/>
            </IconButton>
        </div>
    )
}