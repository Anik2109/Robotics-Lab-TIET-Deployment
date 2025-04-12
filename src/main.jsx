import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import {Home,Events,Project,AllProjects} from "./Pages/index"
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
        {
          path: "/events",
          element: <Events />,
        },
        {
          path:"/projects",
          element:<Project />,
        },
        {
          path: "/projects/all",
          element: <AllProjects />
        },
        {
          path:"/team",
          element:<Home />
        }
      ]
    }
]);

createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
