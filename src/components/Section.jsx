import WayToTeach from './WayToTeach'
import { ways} from '../data'
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



