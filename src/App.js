import React from 'react'
import Navbar from './component/Navbar'
import Textform from './component/Textform'
import Alert from './component/Alert'
import { useState } from 'react'
import About from './component/About'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



export default function Home() {

  const [mode, setmode] = useState("dark")
  const [switchname, setswitchname] = useState("dark enabled")

  // alert
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }

  // set background color of body
  const [bgc, setbgc] = useState("#042743")
  document.body.style.backgroundColor = bgc


  const modechange = () => {
    
    if (mode === "dark") {
      setmode("light")
      setswitchname("light enabled")

      document.body.style.backgroundColor = setbgc("white")

      showalert("light mode has been enable ", "success")
    }
    else {

      setmode("dark")
      setswitchname("Dark enabled")
      document.body.style.backgroundColor = setbgc("#042743")

      showalert("dark mode has been enable ", "success")

    }
  }


  const router = createBrowserRouter([


    {
      path: "/",
      element: <Navbar title="TextUtlis" AboutText="AboutText" mode={mode} togglemode={modechange} switchname={switchname}  />,
      children: [

        {
          path: "/",
          element: <Textform heading=" Enter your text to analayse" showalert={showalert} mode={mode} />,
        },

        {
          path: "/about",
          element: <About mode={mode} />
        }

      ]
    }





  ]);




  return (
    <>

      <Alert alert={alert} />
      <RouterProvider router={router} />



    </>

  )
}