import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [word, setWord] = useState();
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(1);

  function handleChange(e){
    setWord(e.target.value)
  }

  function handleAdd(){
    const newArr = [...arr];
    const todoItem = {
      "text": word,
      "done": false,
      "id": count
    }
    //gjorde unshift istället för "push" för att få upp nya elementet längst upp istället för längst ner!
    newArr.unshift(todoItem);
    setArr(newArr);
    setCount(count + 1)
    console.log(todoItem)
  }

  function handleDelete(id) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === id){
        console.log(`deleted the object with the id of ${id}`)
      }else{
        newArr.push(arr[i])
      }

      setArr(newArr)
    }

    
  }


  function handleDone(id, done){
    const newArr = [...arr];
    for(let i = 0; i < newArr.length; i++) {
      const item = newArr[i];
      if(item.id === id) {
        item.done = !done;
      }
    }

    setArr(newArr);
  }


  return (
    <div className="App">
      <h1>To-do list</h1>
      <input type="search" onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
      
      {arr.map(item => {
        return (
          <div key={item.id}>
          <h3>{item.text}</h3>
          <button onClick={() => handleDone(item.id, item.done)}>
            {item.done ? "Undo" : "Done"}
            </button>
          <button onClick={() => handleDelete(item.id)}>Ta bort</button>
    </div>
        )
      })}
    </div>
  )
}

export default App
