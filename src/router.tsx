import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Game } from '@/page/game'

const publicRoutes = [
  {
    element: <Game />,
    path: '/',
  },
]

const router = createBrowserRouter(publicRoutes)

export const Router = () => {
  return <RouterProvider router={router} />
}
