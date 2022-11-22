import axios from 'axios';
import { useEffect, useState } from 'react';
import './component/style.css';
import Loading from './component/Loading';
import UserList from './component/UserList';


function App() {
const [listOfUser, setListOfUser] = useState(null)
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(users => setListOfUser(users.data))
  .catch(errors => console.log('errors', errors))
}, [])

  return (
    <div className="App">
      <h1> List Of Users</h1>
      {listOfUser ? <UserList listOfUser={listOfUser} /> : <Loading />}
    </div>
  );
}

export default App;
