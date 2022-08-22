import React from 'react'

function Card({name, email, imageUrl,onChangeField}) {
  return (
    <div className="outline w-25 grow bw-2 shadow-5 pa2  bg-light-green">
        <img src={imageUrl} alt={name} />
        <div >
            <h2>{name}</h2>
            <h5>{email}</h5>
        </div>
    </div>
  )
}

export default Card