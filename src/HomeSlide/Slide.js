import React from 'react';
import "./Slide.css";
import Slide1 from '../Images/Slide1.jpg';
import Slide2 from '../Images/Slide2.jpg';
import Slide3 from '../Images/Slide3.jpg';
import Slide4 from '../Images/Slide4.jpg';


let images = [
    {
        Image: Slide1,
        Title: "Walls"
    },
    {
        Image: Slide2,
        Title: "village"
    },
    {
        Image: Slide3,
        Title: "City"
    },
    {
        Image: Slide4,
        Title: "Toddler"
    }
]

const SlideWidth = {
    width: 21 + 'em',
    height: 13.5+'em',
    position: 'relative',
    left: 0.82 + 'em'
}


var i = 0;
var CurrentImage;

class SlideComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ImageShowing: {}

        }
    }
    
    componentDidMount(){
        this.swapImage()
        console.log(CurrentImage)
        
        console.log(this.state.ImageShowing)
    }
    swapImage = () => {
        CurrentImage = images[i]
        console.log("current image is" + images[i].Title)   
        if(i < images.length - 1 ){
            i++;
        }
        else{
            i= 0;
        }
        setTimeout(() => {this.swapImage()},3000)
        console.log(CurrentImage)
        this.setState({
            ImageShowing: CurrentImage
        })
        console.log(this.state.ImageShowing)
        return CurrentImage

    }

    render(){
        return(
            <div className="Main-Slide-Container" >
                <img key={this.state.ImageShowing.Title} src={this.state.ImageShowing.Image} alt={`${this.state.ImageShowing.Title}`} style={SlideWidth}/>
            </div>
        )
    }
    
}
export default SlideComponent;