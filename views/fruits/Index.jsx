import React from 'react'
const Default = require('../layout/Default')

function Index ({fruits}) {
  return (
    <Default title={'Fruits Index Page'}>
      {/* <h1>Fruits Index Page</h1> */}
      <nav>
          <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      <ul>
          {
            fruits.map((fruit, i) => {
              return (
                <p key={i}>
                  <li key={i}>
                      The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color} <br/>
                      and {fruit.readyToEat ? `it is ready to be eaten. Yummy.` : `it is not ready to be eaten!`}
                      <br />
                      {fruit.isItGood ? `Yes, I Like ${fruit.name}.` : `No, I don't like ${fruit.name}`}
                      <br />
                      <form method='POST' action={`/fruits/${fruit._id}?_method=DELETE`}>
                      {/* Delete button */}
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/fruits/${fruit._id}/edit`}> Edit Fruit </a>
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