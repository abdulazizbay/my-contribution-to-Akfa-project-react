import React from 'react'

export const AdvantageIconsMaped = (props) => {
    const {id , icon, text, description}= props.item
  return (  
    <div>
        <span className='icon'>{icon}</span>
        <h3>{text}</h3>
        <p>{description}</p>
    </div>
    
  )
}
