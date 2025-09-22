import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'

export default function App() {
  const [ content, setContent ] = useState('Press the button')


// let content = 'Press the button'

// console.log('App component Render')

function handleClick(type) {
  // console.log('button click', type)
  setContent(type)
  // content = type
}





  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Dexter</h3>

          <ul>
              <WayToTeach 
               title={ways[0].title}
               description={ways[0].description}
              />
              <WayToTeach {... ways[1]}
              />
              <WayToTeach {... ways[2]}
              />
              <WayToTeach {... ways[3]}
              />
          </ul>

        </section>

        <section>
          <h3>Difference</h3>
          
          <Button onClick={() => handleClick('way')}>1button1</Button>
          <Button onClick={() => handleClick('easy')}>2button2</Button>
          <Button onClick={() => handleClick('program')}>3button3</Button>
        
        
          <p>{differences[content]}</p>
        </section> 


      </main>
    </div>

  )
}


