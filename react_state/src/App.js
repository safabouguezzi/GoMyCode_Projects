import './App.css';
import Profile from "./Profile/Profile.js"
import React from "react"
import myImg from "./Profile/images/me.png"

class App extends React.Component{
  constructor(person) {
    super(person);
    this.state={
      fullName:"Safa Bouguezzi", 
      bio: `"Even in a chaotic atmosphere, Safa finds her own way. With patience and desire, she will gradually achieve what she wants."`, 
      imgSrc: myImg, 
      profession:"Full Stack JS Developer",
      show : false ,
      time :0
    };
  }

  handleClick = () => {
    this.setState((state) => ({ show: !state.show }));

  }; 

  render () {

    return (
      <div className="App">
          <div className="App-header">
                
              {this.state.show && <Profile fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio}  imgSrc={this.state.imgSrc}/>}
              <button className="clickMe" onClick={this.handleClick}> {this.state.show? 'Hide Content ✨🧙🏻‍♀️' : ' Show Content ✨🧙🏻‍♀️'} </button>

          </div>

      </div>
    );
}
}

export default App;
