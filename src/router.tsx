import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { GameContext } from '@/context/game.context'
import { GameOver } from '@/page/game-over'

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
      {
        element: <GameOver />,
        path: '/game-over',
      },
    ],
    element: <GameContext />,
  },
]

const router = createBrowserRouter(publicRoutes)

export const Router = () => {
  return <RouterProvider router={router} />
}
