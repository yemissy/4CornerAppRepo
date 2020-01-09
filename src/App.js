import React from 'react';
import './App.css';
import LandingPage from './LandinPage/landingPage.js';

// const tempBackground = {
//   backgroundColor: 'pink',
//   color: 'white',
//   fontSize: '40px',
//   width: '100vw',
//   height: '100vh'
// }

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
  componentDidMount(){
    console.log(`${this.state.ScreenSize.width}`)
    console.log(`${this.state.ScreenSize.height}`)
  }
  onScreenChange = () => {
    window.addEventListener('resize', () => {
      this.setState({
        ScreenSize:{
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }
      })
    })
    // console.log(`${this.state.ScreenSize}`)
  }


  render(){
    this.onScreenChange()
    return (
      <div className="App">
        <header className="App-header">
        {/* {this.state.ScreenSize.width <= 414 ?  */}
        <LandingPage ScreenWidth={this.state.ScreenSize.width}/> :
        {/* <div style = {tempBackground} >Hello You There</div> */}
        </header>
      </div>
    );
     
  }
} 

 

export default App;
