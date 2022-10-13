import './App.css';
import defaultimage from './images/background_Images/large.png';
import Logo from './images/icons/favicon.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="img_default" src={defaultimage} alt=""></img>

        <div className='div_form'>

          <form >
            <div id="welcome" className="welcome">

              <h1 class="text-1">Every new friend is a new adventure</h1>
              <p class="text-2">Let's get connected</p>
            </div>
            <div id="div_firstName" className="form-group div_firstName input-box">
              <i class="fas fa-user"></i>
              <input type="text" className="form-control" id="firstName" placeholder="First Name" />
            </div>

            <div id="div_lastName" className="form-group div_lastName input-box">
              <i class="fas fa-user"></i>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
            </div>

            <div className="form-group div_email input-box">
              <i class="fas fa-envelope"></i>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            </div>
            <div>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>

            <div className="form-group div_password input-box">
              <i class="fas fa-lock"></i>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check div_checkbox">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary div_submit">Submit</button>
          </form>
        </div>


      </header>
    </div>
  );

}

export default App;
