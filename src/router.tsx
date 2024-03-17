import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GameContext } from '@/context/game.context'

import { Game } from './page/game'
import { Home } from './page/home'

const publicRoutes = [
  {
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Game />,
        path: '/game',
      },
    ],
    element: <GameContext />,
  },
]

const router = createBrowserRouter(publicRoutes)

export const Router = () => {
  return <RouterProvider router={router} />
}
