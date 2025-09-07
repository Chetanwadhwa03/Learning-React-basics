import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" style={{overflow:'hidden'}}>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/023/056/329/small/programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software-engineer-coding-on-laptop-computers-with-technology-icons-and-binary-code-big-data-ai-bot-digital-machine-photo.jpg' alt="Tech image" width={333}></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
    
  )
}

export default Card
