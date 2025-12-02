import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp() {
//   return (
//     <>
//       <h1>This is cusmot vite | learning</h1>
//     </>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//     children: 'Click me to visit GOOGLE'
//   },
// }

// const customElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotherUser = 'React Series';

const customReactRender = React.createElement('a', { href: 'https://google.com', target: '_blank', title: anotherUser }, 'Click me to visit google ', anotherUser);

console.log(customReactRender);

createRoot(document.getElementById('root')).render(

  // customElement

  customReactRender

  // <App />
  // MyApp()

)
