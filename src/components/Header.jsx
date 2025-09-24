import logo from '/dexter-logo-png-clipart.jpg'
import { useState } from 'react'

export default function Header() {
  const [now, setNow] = useState(new Date())



  setInterval(() => setNow(new Date()),1000)
  return (
      <header>
        <img src={logo} alt='Result'/>
        {/* <h3>Test Header</h3> */}


        <span>Time right now: {now.toLocaleTimeString()}</span>
      </header>
  )
}
