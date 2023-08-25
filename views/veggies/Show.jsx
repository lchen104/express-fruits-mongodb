import React from 'react'

function Show ({veggie}) {
  console.log(veggie)
  return (
    <div>
        <h1>The {veggie.name} is {veggie.color}</h1>
        {veggie.readyToEat ? 'It is ready to be eaten. Yummmy.' : 'Ewww...!'}
        <br/>
        { veggie.isItGood ? `Yes, I Like ${veggie.name}.` : `No, I don't like ${veggie.name}` }
    </div>
  )
}

module.exports = Show;