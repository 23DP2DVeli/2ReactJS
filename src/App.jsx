import Header from './components/Header'
import Section from './components/Section.jsx'
import DifferencesSection from './components/Differences.jsx'
import IntroSection from './components/introSection.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection/>
        <Section />
        <DifferencesSection/>
      </main>
    </>
  )
}


