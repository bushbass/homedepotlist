import React from 'react'

function ListItem({ name, count, id, increment, decrement }) {
  return (
    <li>
      {name} - <button onClick={() => increment(id)}>+</button>
      {count}
      <button onClick={() => decrement(id)}>-</button>
    </li>
  )
}

export default ListItem
