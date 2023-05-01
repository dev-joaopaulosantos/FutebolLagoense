import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Games from './pages/Games/Games.jsx'
import Tables from './pages/Tables/Tables.jsx'
import Infos from './pages/Infos/Infos.jsx'

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         { path: "/", element: <Games /> },
         { path: "/tables", element: <Tables /> },
         { path: "/infos", element: <Infos /> },
      ]
   }
])

import { ChampionshipProvider } from './context/ChampionshipContext'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ChampionshipProvider>
         <RouterProvider router={router} />
      </ChampionshipProvider>
   </React.StrictMode>,
)
