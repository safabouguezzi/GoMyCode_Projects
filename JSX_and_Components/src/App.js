import './App.css';
import FullName from "./Component/Profile/FullName.js"
import Address from "./Component/Profile/Address.js"
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
