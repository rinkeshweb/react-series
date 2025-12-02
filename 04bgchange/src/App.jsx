import './App.css'
import colors from '../public/json/color.json'
import { useState, useEffect } from 'react'

function App() {

  const [color, setColor] = useState("");

  const changeBg = (selectedColor) => {
    console.log("selectedColor", selectedColor)
    setColor(selectedColor)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <>
      <div className="flex justify-evenly bg-cyan-700 px-3 py-5 shadow-2xl rounded-xl">
        {colors.map((color, index) => {
          return <span key={index}
            style={
              { background: color.code, color: color.name == "White" ? 'black' : 'white' }
            }
            className="inline-flex items-center rounded-md px-2 py-1 cursor-pointer text-xs font-medium inset-ring inset-ring-gray-500/10"
            onClick={() => changeBg(color.code)}>
            {color.name} = {index + 1}
          </span>
        })}
      </div>
    </>
  )
}

export default App
