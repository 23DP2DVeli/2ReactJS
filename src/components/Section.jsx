import WayToTeach from './WayToTeach'
import { ways} from '../data'
import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'
export default function Section() {
    return (
        <section>
                  <h3>Dexter</h3>
        
                  <ul>
                    {ways.map((way) => {
                      return <WayToTeach key={way.title} {...way} />
                    })}
                  </ul>
        
        </section>
        
    )
}

export function ButtonSection() {
  
    const [ contentType, setContentType ] = useState(null)

let tabContent = null

if (contentType) {
  tabContent = <p>{differences[contentType]}</p>
} else {
  tabContent = <p>Press the button</p>
}

    function handleClick(type) {
    setContentType(type)
}

    return (
        <section>
          <h3>Difference</h3>
          
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>1button1</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>2button2</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>3button3</Button>

        
        { tabContent }
        </section> 
    )
}

