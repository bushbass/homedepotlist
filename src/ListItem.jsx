import React from 'react';

function ListItem({ name, count, id, increment, decrement, deleteItem }) {
  return (
    <li>
      <span className="buttons">
        <button onClick={() => increment(id)}> + </button>
        {count > 0 && (
          <>
            <span className="count">{count}</span>
            <button onClick={() => decrement(id)}> - </button>
          </>
        )}
      </span>
      <span className="description">{name}</span>
      {count < 1 && <button onClick={() => deleteItem(id)}>delete</button>}
    </li>
  );
}

export default ListItem;
