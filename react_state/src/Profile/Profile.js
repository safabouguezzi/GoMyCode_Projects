import "./Profile.css"
import {Component} from "react"

export default class Profile extends Component {
    state={
        time:0
    }
    componentDidMount() {
        setInterval(() => {
          this.setState((previousState) => ({
          time: previousState.time + 1,
          }));
        }, 1000);
      }
      
    render() {
        const {fullName, bio, imgSrc, profession} = this.props;
  return (
    <div className="container">
        <div className="section">
            <div className="photo">
                <img className="myimg" src={imgSrc} />
            </div>

            <div className="profile">
                <h1 className="name">{fullName}</h1>
                <h3 className="myProfession">{profession}</h3>
                <p className="myBio">{bio}</p>
            </div>
        </div>
        <button className="clickMe">Timer ⏱: {this.state.time}</button>
    </div>
  )
    }
}

