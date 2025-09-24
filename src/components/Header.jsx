import logo from '/dexter-logo-png-clipart.jpg'
import { useState, useEffect } from 'react'

export default function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(timer) // 🔥 очистка при размонтировании
  }, [])

  return (
    <header>
      <img src={logo} alt='Result'/>
      <span>Time right now: {now.toLocaleTimeString()}</span>
    </header>
  )
}
