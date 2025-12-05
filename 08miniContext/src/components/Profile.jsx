import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const { user } = useContext(UserContext)
    if (!user || (user.username == '')) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Profile
                    </h2>
                    <p className="text-gray-500">
                        Please enter your details in the login form.
                    </p>
                </div>
            </div>
        )
    }
    return <div className="flex items-center justify-center min-h-[200px]">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Welcome,{" "}
                <span className="text-blue-600">
                    {user.username.toUpperCase()}
                </span>
            </h2>

            <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-500">Your details:</p>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-gray-600 font-medium">Username</span>
                    <span className="text-gray-800">{user.username}</span>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-gray-600 font-medium">Password</span>
                    <span className="text-gray-800">{user.password}</span>
                </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
                * This is demo data from Context API, do not use real passwords.
            </p>
        </div>
    </div>
}