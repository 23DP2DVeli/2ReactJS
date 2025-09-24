import Header from './components/Header'
import {differences } from './data'
import { useState } from 'react'
import Section from './components/Section.jsx'
import { ButtonSection } from './components/Section.jsx'

export default function App() {


  return (
    <div>
      <Header />
      <main>
        <Section />
        <ButtonSection/>

      </main>
    </div>

  )
}


