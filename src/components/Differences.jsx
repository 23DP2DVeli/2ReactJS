import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'


export default function DifferencesSection() {
  
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