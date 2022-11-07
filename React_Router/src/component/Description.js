import React, { useState } from 'react'
import './style.css';
import {Button}  from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';

const Description = () => {
    const [Movies, setMovies] = useState([
        {
          id: 1,
          name: "The Lord of the Rings: The Rings of Power",
          description: `Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.`,
          trailer : "https://www.youtube.com/embed/x8UAUAuKNcU"
        },
        {
          id: 2,
          name: "The School for Good and Evil",
          description: `Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.`,
          trailer : "https://www.youtube.com/embed/aftysDQ4hpI"
        },
        {
          id: 3,
          name: "King Arthur: Legend of the Sword",
          description: `When the child Arthur’s father is murdered, Vortigern, Arthur’s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Excalibur from the stone, his life is turned upside down and he is forced to acknowledge his true legacy... whether he likes it or not.`,
          trailer : "https://www.youtube.com/embed/jIM4-HLtUM0"
        },
        {
          id: 4,
          name: "The Lion King",
          description: `Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.`,
          trailer : "https://www.youtube.com/embed/7TavVZMewpY"
        },
        {
          id: 5,
          name: "The Walking Dead",
          description: `Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.`,
          trailer : "https://www.youtube.com/embed/R1v0uFms68U"   
        },
        {
          id: 6,
          name: "Grey's Anatomy",
          description: `Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.`,
          trailer : "https://www.youtube.com/embed/qbkEtYz9acA"
        },
        {
          id: 7,
          name: "Poliana Moça",
          description: `Poliana is now a girl and will be 15 years old and this event caused a lot of problems even when the party ended now is another reason João or eric who is going to date Poliana?`,
          trailer : "https://www.youtube.com/embed/hGx3H1QMvJ0"
        },
        {
          id: 8,
          name: "Lisa",
          description: `Dealing with guilt and grief, two friends use a Ouija board to contact their dead roommate for details about her death. Getting closer to the truth, a dark entity begins to haunt them. What they will uncover will follow them forever, unless they are able to stop it.`,
          trailer : "https://www.youtube.com/embed/OqcP_wkcl2I"
        },
        {
          name: "Star Wars: Tales of the Jedi",
          description: `Journey into the lives of two distinctly different Jedi from the prequel era – Ahsoka Tano and Count Dooku. Each will be put to the test as they make choices that will define their destinies.`,
          trailer : "https://www.youtube.com/embed/-uRRKqQbmw4"
        },
        {
          id: 10,
          name: "The White Lotus",
          description: `Follow the exploits of various guests and employees at an exclusive tropical resort over the span of a week as with each passing day, a darker complexity emerges in these picture-perfect travelers, the hotel’s cheerful employees and the idyllic locale itself.`,
          trailer : "https://www.youtube.com/embed/TGLq7_MonZ4"
        },
      ]);
    const navigate =useNavigate()
    const params = useParams()
    console.log('Movies', Movies)

    let desc = Movies.find(movie => movie.id == params.id)
    console.log('desc', desc)
    return (
        <div >
            <div className='description' >

                <h1> Movie Description</h1>
                <Button  style={{
                  margin: "10px",
                  backgroundColor: "#032541",
                  borderColor: "#032541",
                  fontSize: "1.5em",
                  fontWeight: "bolder"
                }}  onClick={()=>navigate("/")} >
                    Go Back
                </Button>
            
            </div>
            
            <div className='movieDescription'>


                <div className='text' >

                    <h1>{desc.name}</h1>
                    <div className='desc'> {desc.description} </div> 


                </div>


                <div className='trailer'>

                    <iframe  style={{ width: "550px", height:"350px" , borderRadius:"5px" }} className='video'
        frameBorder={0}  allowFullScreen
                        src={desc.trailer}>
                    </iframe>
                  
                </div>



            </div>
        </div>
    )
}

export default Description;
