import React from 'react'

const New = () => {
  return (
    <div>
        <h1>New Veggies page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/veggies" method="POST">
            Name: <input type="text" name="name" /><br/>
            Color: <input type="text" name="color" /><br/>
            Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            Is It Good: <input type="checkbox" name="isItGood" /><br/>
            <input type="submit" name="" value="Create Veggie"/>
        </form>
    </div>
  )
}

module.exports = New