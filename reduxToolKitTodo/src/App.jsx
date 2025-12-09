import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <div className="w-full min-h-screen bg-gray-700 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-gray-200 py-3 px-5 rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold text-center">Learn about Redux Toolkit</h1>
          <div className="border-y-3 border-indigo-500 py-5 my-5">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-4">
            <Todos />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
