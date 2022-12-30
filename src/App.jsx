import { useEffect, useState } from 'react'
import './App.css'
import ListItem from './ListItem'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState(() => {
    if (localStorage.hdList) {
      return JSON.parse(localStorage.hdList)
    } else {
      return [
        {
          input: 'cheap topsoil',
          count: 1,
          id: '836e3427-72d9-4666-a5d5-7d88323a32cf',
        },
        {
          input: 'scotts topsoil',
          count: 1,
          id: 'deb4b8a9-3520-43a6-9e55-94ae1c6f3040',
        },
        {
          input: 'scotts lawn soil',
          count: 1,
          id: '69e82fb2-d20c-42ab-9bd4-54f76dbb5445',
        },
        {
          input: 'bovung',
          count: 1,
          id: 'be2b4f9c-4d45-4472-919a-b575e2b58851',
        },
        {
          input: 'black cow',
          count: 1,
          id: '5b0b429c-439d-4810-bf46-8354760f1d6e',
        },
      ]
    }
  })
  useEffect(() => {
    localStorage.setItem('hdList', JSON.stringify(list))
  }, [list])

  const handleSubmit = (e) => {
    e.preventDefault()
    setList((list) => [...list, { input, count: 1, id: uuidv4() }])
    setInput('')
  }
  const increment = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 }
        }
        return item
      })
    )
  }
  const decrement = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 }
        }
        return item
      })
    )
  }

  const deleteItem = (id) => {
    const filteredList = list.filter((item) => item.id != id)
    localStorage.setItem('hdList', JSON.stringify(filteredList))
    setList(filteredList)
  }

  return (
    <div className='App'>
      <h2>Garden List</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type='text'
          onChange={(e) => setInput(e.target.value)}
        />

        <button>Add New Item</button>
      </form>
      <h2>Need these</h2>
      <ul>
        {list
          .filter((item) => item.count > 0)
          .map((item) => (
            <ListItem
              increment={increment}
              decrement={decrement}
              name={item.input}
              count={item.count}
              id={item.id}
              key={item.id}
            />
          ))}
      </ul>
      <h2>Dont need these</h2>
      <ul>
        {list
          .filter((item) => item.count <= 0)
          .map((item) => (
            <ListItem
              increment={increment}
              decrement={decrement}
              deleteItem={deleteItem}
              name={item.input}
              count={item.count}
              id={item.id}
              key={item.id}
            />
          ))}
      </ul>
    </div>
  )
}

export default App
