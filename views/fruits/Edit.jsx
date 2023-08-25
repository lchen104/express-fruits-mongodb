import React from 'react'
const Default = require('../layout/Default')

const Edit = ({fruit}) => {
  return (
    <Default title='Edit Page'>
        <form method='POST' action={`/fruits/${fruit._id}?_method=PUT`}>
            Name: <input type='text' name='name' defaultValue={fruit.name} />
            <br />
            Color: <input type='text' name='color' defaultValue={fruit.color} />
            <br />
            Is Ready To Eat:
              { fruit.readyToEat ? <input type="checkbox" name="readyToEat" defaultChecked /> : <input type="checkbox" name="readyToEat"/> }
            <br/>
            Is It Good:
              { fruit.isItGood ? <input type="checkbox" name="isItGood" defaultChecked /> : <input type="checkbox" name="isItGood"/> }
            <br/>
            <input type='submit' value='Submit Changes' />
        </form>
    </Default>
  )
}

module.exports = Edit