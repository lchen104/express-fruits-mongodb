import React from 'react'

function Show ({fruit}) {
  console.log(fruit)
  return (
    <div>
        <h1>The {fruit.name} is {fruit.color}</h1>
        {fruit.readyToEat ? 'It is ready to be eaten. Yummy.' : 'Ewww...!' }

    </div> 
  )
}

module.exports = Show;