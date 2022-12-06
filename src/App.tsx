// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Provider } from 'react-redux'

// import Hello from './components/hello/Hello'
import Layout from './pages/Layout'
import AppRouter from './Routers'
import { store } from './store'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Layout>
        <AppRouter />
      </Layout>
    </Provider>
  )
}

export default App
