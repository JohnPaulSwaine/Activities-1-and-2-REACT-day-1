// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Job from './Job'
// import Pet from './Pet'
const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h2>My First React App</h2>
      <Person name = "Milim Nava" age = "2,000 +" type = "Dragon" petname = "Veldora"/> <Job oldJob = "a member of the Ten Great Demon Lords" newJob = "a Demon Lord, and as a member of Octogram" /> 
      { /*<Pet type = "Dragon" Name = "Veldora"/>*/}
     
      <Person name = "Ramiris" age = "50" type = "Golem" petname = "Beretta"/> <Job oldJob = "a member of the Ten Great Demon Lords" newJob = " the Queen of Spirits, Demon Lord, and as a member of Octogram" /> 
      {/*<Pet type = "Golem" Name = "Beretta" /> */}
     
      <Person name = "Rimuru Tempest" age = "37" type = "Tempest Wolf" petname = "Ranga"/> <Job oldJob = "the Mayor of the town of Tempest" newJob = " the Leader of the Jura Tempest Federation, Demon Lord, and as a member of Octogram" /> 
      { /*<Pet type = "Tempest Wolf" Name = "Ranga" /> */}

      
    </div>
  )
}

export default App
