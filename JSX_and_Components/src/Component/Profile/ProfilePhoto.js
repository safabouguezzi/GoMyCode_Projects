import React from "react"
import MyImage from "./ProfilePhoto.jpg"

const ProfilePhoto = () => {
    return (
        <div>
            <img src={MyImage} alt="My Photo" height={300} width={250}></img>
        </div>
    );
}
export default ProfilePhoto