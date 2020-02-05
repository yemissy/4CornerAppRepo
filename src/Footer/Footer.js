import React from 'react';
import './Footer.css';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'
import facebook from '../Images/facebook.png';
import Twitter from '../Images/Twitter.png';
import Instagram from '../Images/Instagram.png';


export default function Footer(props){
    return(
        <div id="FooterDiv">
            <div id="inputDiv">
                <Input size='small' type='text' placeholder="Your Email" id="FooterInput"/>
                <Button content="Subscribe" type='submit'/>
            </div>
            <div id='FollowUs'>
                <p>Follow Us: </p>
                <div id='SocialIcons'>
                    <img src={facebook} alt="Facebook Icon"/>
                    <img src={Twitter} alt="Twitter Icon"/>
                    <img src={Instagram} alt="Instagram Icon"/>
                </div>
            </div>
        </div>
    )
}