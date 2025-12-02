import Card from './components/Card'
import userList from '../lib/json/users.json'
import './App.css'


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 p-3 rounded mb-5">
        Hello world!
      </h1>
      {
        userList.map((item, index) => {
          return <Card key={index} username={item.username} img={item.image} feature={item.features} view={item.views} info={item.disc} />
        })
      }
    </>
  )
}

export default App
