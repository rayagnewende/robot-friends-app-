import React from 'react'
import Card from './Card'

function CardList({ robots}) {
  const cardList  = robots.map( (robot,index) => {
    return <Card 
              key={robot.id}
              name={robot.name}
              email={robot.email}
              imageUrl={`https://robohash.org/${robot.id}?200x200`}
           />
  })

  return (
    <div className="flex flex-wrap">
        {
          cardList
        }
        
    </div>
  )
}

export default CardList