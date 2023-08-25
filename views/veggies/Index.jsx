import React from 'react'
const Default = require('../layout/Default')

function Index ({veggies}) {
  return (
    <Default title={'Veggies Index Page'}>
      {/* <h1>Veggies Index Page</h1> */}
      <nav>
          <a href="/veggies/new">Create a New Veggie</a>
      </nav>      
      <ul>
          {
            veggies.map((veggie, i) => {
              return (
                <p key={i}>
                  <li key={i}>
                      The <a href={`/veggies/${veggie.id}`}>{veggie.name}</a> is {veggie.color} <br/>
                      and 
                      {veggie.readyToEat ? `It is ready to be eaten. Yummy` : `It is not ready to be eaten!`}
                      <br />
                      {veggie.isItGood ? `Yes, I Like ${veggie.name}.` : `No, I don't like ${veggie.name}`}
                      <br />
                      <form method='POST' action={`/veggies/${veggie._id}?_method=DELETE`}>
                      {/* Delete button */}
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/veggies/${veggie._id}/edit`}> Edit Veggie </a>
                  </li>
                </p>
              );
            })
          }
      </ul>
    </Default>
  )
}

module.exports = Index;