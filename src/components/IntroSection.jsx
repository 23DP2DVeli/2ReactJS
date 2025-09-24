import React from "react"

// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Dexter Mogger</h1>
//             <h3  className="centered" style={{color: '#4b4a4aff'}}>
//                 Днём он расследует убийства, а ночью — совершает их.</h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement(
        'section',
         null,
        [React.createElement('h1', {className: 'centered'}, 'Dexter Mogger'),
        React.createElement('h3', {className: 'centered', style: {color: '#7a7a7aff'}}, 'Днём он расследует убийства, а ночью — совершает их.')]
        )
}