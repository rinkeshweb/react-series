import './App.css'
import colors from '../public/json/color.json'
import { useState } from 'react'

function App() {

  const [selectedColor, setColor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-500" style={{ backgroundColor: selectedColor }}>
        <div className="fixed flex flex-wrap max-w-6xl justify-center px-4 bottom-12 inset-x-0">
          <div className="flex flex-wrap gap-3 bg-cyan-700 p-5 shadow-2xl rounded-xl">
            {colors.map((color) => {
              return <span
                style={
                  { backgroundColor: color.code, color: color.name == "White" ? 'black' : 'white' }
                }
                className="inline-flex items-center rounded-md px-2 py-1 cursor-pointer text-xs font-medium inset-ring inset-ring-gray-500/10"
                onClick={() => setColor(color.code)}>
                {color.name}
              </span>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
