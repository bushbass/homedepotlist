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
      return []
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
        />{' '}
        Add New Item
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
