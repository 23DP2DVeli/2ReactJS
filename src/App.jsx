import Header from './components/Header'
import { ways } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'

export default function App() {
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
          
          <Button>1button1</Button>
          <Button>2button2</Button>
          <Button>3button3</Button>
        </section> 


      </main>
    </div>

  )
}


