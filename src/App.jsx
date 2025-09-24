import Header from './components/Header'
import Section from './components/Section.jsx'
import DifferencesSection from './components/Differences.jsx'
import { Fragment } from 'react'


export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Section />
        <DifferencesSection/>
      </main>
    </Fragment>

  )
}


