import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from './page/home'

const publicRoutes = [
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <Game />,
    path: '/game',
  },
]

const router = createBrowserRouter(publicRoutes)

export const Router = () => {
  return <RouterProvider router={router} />
}
