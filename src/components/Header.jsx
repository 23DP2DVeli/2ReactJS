import logo from '/dexter-logo-png-clipart.jpg'

export default function Header() {
    const now = new Date()

  return (
      <header>
        <img src={logo} alt='Result'/>
        {/* <h3>Test Header</h3> */}


        <span>Time right now: { now.toLocaleTimeString() }</span>
      </header>
  )
}
