import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleForm = (e) => {
        e.preventDefault();
        setUser({ username, password })
        setUsername(''),
            setPassword('')
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-[300px]">
                <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Login
                    </h2>

                    <form onSubmit={handleForm} className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg 
                       transition-all duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}