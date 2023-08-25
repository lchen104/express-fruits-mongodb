import React from 'react'
const Default = require('../layout/Default')

const Edit = ({veggie}) => {
  return (
    <Default title='Edit Page'>
        <form method='POST' action={`/veggies/${veggie._id}?_method=PUT`}>
            Name: <input type='text' name='name' defaultValue={veggie.name} />
            <br />
            Color: <input type='text' name='color' defaultValue={veggie.color} />
            <br />
            Is Ready To Eat:
              { veggie.readyToEat ? <input type="checkbox" name="readyToEat" defaultChecked /> : <input type="checkbox" name="readyToEat"/> }
            <br/>
            Is It Good:
              { veggie.isItGood ? <input type="checkbox" name="isItGood" defaultChecked /> : <input type="checkbox" name="isItGood"/> }
            <br/>
            <input type='submit' value='Submit Changes' />
        </form>
    </Default>
  )
}

module.exports = Edit