import React from 'react';
import './App.css';
import LandingPage from './LandinPage/landingPage.js';
import logo from './Images/logo.svg';
import { Label } from 'semantic-ui-react';
// import MobileFooter from './Footer/MobileFooter';


const colors = [
        'red',
        'orange',
        'yellow',
        'olive',
      ]
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ScreenSize:{
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }
  } 

  onScreenChange = () => {
    window.addEventListener('resize', () => 
      this.setState({
        ScreenSize:{
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }
      })
    )

  }


  render(){
    this.onScreenChange()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt= 'logo' className="logo"/>
          <LandingPage 
          ScreenWidth={this.state.ScreenSize.width}
          /> 
          {colors.map(color => 
                (
                <Label circular  color={color} empty key={color} size="small"/>
                )
            )}
          {/* {this.state.ScreenSize.width <= 414 ?
          <MobileFooter />: null} */}
        </header>
      </div>
    );
     
  }
} 

 

export default App;
