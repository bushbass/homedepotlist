import React from 'react'

function ListItem({ name, count, id, increment, decrement }) {
  return (
    <li>
      <span className='buttons'>
        <button onClick={() => increment(id)}> + </button>
        {count > 0 && (
          <>
            {count}
            <button onClick={() => decrement(id)}> - </button>
          </>
        )}
      </span>
      <span>{name}</span>
    </li>
  )
}

export default ListItem
