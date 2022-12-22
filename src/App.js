import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList(...list, item);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h2>Garden List</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <ul>
        {list.map((item, x) => {
          return <li key={x}> {item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
