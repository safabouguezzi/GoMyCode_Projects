import React from 'react'
import "./style.css"
import {Accordion} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const UserCard = ({user}) => {

    return (

        
    <Accordion  className='accordion'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='displayHeader'> 
            <div >
                <h4 > 🙍‍♂️ {user.name} </h4>
            </div>
        </Accordion.Header>
        <Accordion.Body className='displayBody'>
            <div>
                <p> 👨‍💼 Username : {user.username}</p>
                <p> 📞 Phone : {user.phone}</p>
                <p> 📧 Email : {user.email}</p>
                <p> 🏠 Address : {user.address.street}</p>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
       
    )
}


export default UserCard