import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const tg = window.Telegram.WebApp

    if (tg) {
      tg.ready()
      tg.expand()

      // Проверка безопасности:
      const safeUser = tg.initDataUnsafe?.user
      if (safeUser) {
        setUser(safeUser)
      }
    }
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: '#222' }}>
        Привет {user?.first_name || 'гость'} 👋
      </h1>
      <p style={{ color: '#555' }}>
        Добро пожаловать в $SPT WebApp — зарабатывай токены, обменивай на реальные товары!
      </p>
      <ProductList />
    </div>
  )
}

export default App
