import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'

export default function App() {
  const [ contentType, setContentType ] = useState(null)




function handleClick(type) {
  setContentType(type)
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
        
          {/* { contentType ? <p>{differences[contentType]}</p> : <p>Press the button</p>} */}
          

          {/* { !contentType ? <p>Press the button</p> : null }
          { contentType ? <p>{differences[contentType]}</p> : null } */}
        
          {!contentType && <p>Press the button</p>}
          { contentType && <p>{differences[contentType]}</p>}
        
        
        </section> 


      </main>
    </div>

  )
}


