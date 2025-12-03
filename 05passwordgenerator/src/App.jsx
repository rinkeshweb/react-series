
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // Copy Password
  const passwordRef = useRef(null);

  const onCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password);
  }, [password])



  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className="text-center text-white mb-4">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='bg-white outline-none w-full py-1 px-3 text-grat' ref={passwordRef} placeholder='Password' readOnly />
          <button className='bg-blue-500 text-white px-3 py-2 cursor-pointer hover:bg-blue-600' title='Copy generated password' onClick={onCopy}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="range" value={length} min={6} max={40} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor="numberInput">Numbers</label>
          <input type="checkbox" defaultChecked={numberAllowed} id='charectorInput' onChange={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor="charectorInput">Charectors</label>
        </div>
      </div>
    </>
  )
}

export default App
