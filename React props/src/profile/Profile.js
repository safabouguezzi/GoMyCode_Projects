// with the extension es7 + react/redux/react-native...
// use rafce

import React from 'react'
import profileImage from "../images/profileImg.jpg"
import PropTypes from "prop-types"

let bioSafa = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illo veritatis totam omnis voluptatem expedita beatae. Ullam ipsum, facere inventore magni velit ad molestiae aperiam numquam repellendus laudantium maxime vel.
Quidem aspernatur aperiam alias eligendi autem molestias sint, impedit, ex minus obcaecati quisquam repellat nostrum aliquid consequatur adipisci libero voluptatibus officia, veniam dignissimos ea nulla facilis odio vel! Facilis, officiis.
Temporibus hic expedita repellat dolore commodi dolores exercitationem architecto consequuntur perspiciatis ad veniam reprehenderit obcaecati nostrum dolorem fugiat, quos odit quia accusantium nulla molestias provident.`

const Profile = ({fullName = "Safa Bouguezzi." , bio = bioSafa, 
profession = "Web developer." , children = profileImage , handleName
}) => {
      handleName = e => {
        // e.preventDefault();
    alert(`This is your name: ${fullName}`)
    };
  return (
      <div style={{ padding: 20, backgroundColor: "#0A192F" }}>
          <div style={{margin:20, padding: "20 0 20 0", borderRadius: 10, display: "flex", flexDirection: "row", gap: 20 }}>
              {handleName()}

              <div style={{ border: "solid 2px #64FFDA", display: "block", top: 20, left: 20, zIndex: 3 }}>
                  <div style={{ width: 250, height: 350, overflow: "hidden", backgroundColor: "#64FFDA", zIndex: -1, position: "relative", bottom: 20, right: 20 }}>
                      <img src={children} alt="" style={{ width: 250, height: 420, objectFit: "cover", opacity: "0.6", zIndex: -1, borderRadius: 10, alignItems: "center", position: "relative" }} />
                  </div>
              </div>


              <div style={{ maxWidth: "100%" }}>
                  <div style={{ color: "#ccd6f6", textAlign: "justify", lineHeight: "1.1", fontFamily: "wotfardRegularWebfont", fontWeight: "600", fontSize: "3.4rem", marginBottom: 10 }}> {fullName}</div>
                  <div style={{ color: "#8892b0", textAlign: "justify", lineHeight: "0.9", fontFamily: "wotfardRegularWebfont", fontWeight: "600", fontSize: "3.4rem" }}>{profession}</div>
                  <div style={{ marginTop: 20, color: "#8892b0", textAlign: "justify", lineHeight: "1.3", fontFamily: "wotfardRegularWebfont", fontSize: 20 }}>{bio}</div>

              </div>
          </div>
      </div>
  )
}

Profile.propsTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    handelName: PropTypes.func.isRequired
};

export default Profile



