import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import {Home} from "./Pages/index"
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
      ]
    }
]);

createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
