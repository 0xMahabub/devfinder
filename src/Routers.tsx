import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

// import Counter from './components/counter/Counter'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

const AppRouter = () => {
  const routers: RouteObject[] = [
    {
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <Notfound />,
          path: '*',
        },
      ],
    },
  ]

  const routerRegister = useRoutes(routers)

  return routerRegister
}

export default AppRouter
