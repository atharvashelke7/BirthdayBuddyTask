import { useState } from 'react'
import './App.css'

function MiniProject() {

  const [list, setList] = useState(["a", "b"]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input style={{

        height: "30px"
      }} type="text"
        onChange={(e) => {

          setInputValue(e.target.value)
        }}

      />
      <button onClick={() => {
        setList([...list, inputValue])
      }}>Add</button>
      {
        list.map((item) => {
          return <h1>{item}</h1>
        })
      }


    </div>
  )
}

export default MiniProject
