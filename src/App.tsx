import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState} from "react"
import Count from "./components/Count"

function App() {
  const [count, setCount] = useState<number>(1)

  return (

    <>
      <Heading title={"Hello"} />
      <Section>This is our subheading</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="bold">{item}</span>} />
      <Count />
    </>
    
  )
}

export default App
