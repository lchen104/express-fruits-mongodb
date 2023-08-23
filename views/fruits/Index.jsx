import React from 'react'

function Index ({fruits}) {
  return (
    <div>
      <h1>Fruits Index Page</h1>
      <nav>
          <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      <ul>
          {
            fruits.map((fruit, i) => {
              return (
                  <li key={i}>
                      The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color} <br/>
                      and
                      {fruit.readyToEat ? `It is ready to be eaten. Yummy.` : `It is not ready to be eaten!`}
                    
                  </li>
              );
            })
          }
      </ul>
    </div>
  )
}

module.exports = Index;