import Login from "./components/Login"
import Profile from "./components/Profile.Jsx"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="max-w-3xl w-full">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Learn React with Context API
          </h2>

          {/* Content: Login + Profile */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
              <Login />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
